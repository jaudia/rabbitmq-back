// Dependencies
import express from 'express';
import cors from 'cors';;
import 'colors';

// Routes
import basicRoutes from './routes/basic.js';

import workerManager from './services/ampq/worker.manager.js';


const subRoute = '/api';

export class Server {

    constructor() {

        console.log('Constructor start'.green)

        this.app = express();

        this.port = 3001;            

        this.apiPaths = {
            basic: `${subRoute}/basic`
        }        

        // Middlewares
        this.middlewares();

        // workers
        workerManager.init();

        // App routes
        this.routes();

    }



    middlewares() {

        // CORS
        this.app.use(cors());

        // Body parser
        this.app.use(express.json());

        // Public directory
        this.app.use(express.static('public'));

    }


    routes() {

        this.app.use(this.apiPaths.basic, basicRoutes);

    }


    listen() {
        this.app.listen(this.port, () => {
            console.log(`------------------------`.green);
            console.log(`Server running on:`.green);
            console.log(`Port ${this.port}`.green);
        });
    }

}
