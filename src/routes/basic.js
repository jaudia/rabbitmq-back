// Deps
import { Router } from 'express';

// Modules
import ctrller from '../controllers/basic.js';


const router = Router();

router.post('/hello',
    ctrller.hello
);

router.post('/bye',
    bye
);



export default router;