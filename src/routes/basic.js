// Deps
import { Router } from 'express';

// Modules
import { add } from '../controllers/basic.js';


const router = Router();

router.post('/',
    add
);

// router.get('/:id',
//     getProduct
// );

// router.get('/',
//     getAll
// );
// router.delete('/:id',
//     deleteProduct
// )

// router.put('/:id',
//     updateProduct
// );



export default router;