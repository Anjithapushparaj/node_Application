import { Router } from 'express';

import usersController from './users';
import restaurentController from './restaurents';


const router: Router = Router();

router.use('/users', usersController);
router.use('/restaurents', restaurentController);


export default router;