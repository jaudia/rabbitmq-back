// Deps
import { Router } from 'express';

// Modules
import * as ctrller from '../controllers/basic.js';


const router = Router();

router.post('/hello',
    ctrller.hello
);

router.post('/bye',
    ctrller.bye
);



export default router;