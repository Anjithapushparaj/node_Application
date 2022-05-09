

import { Router, Request, Response, NextFunction } from 'express';

const router: Router = Router();

/**
 * Get users list.
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
router.get('/', (req: Request, res: Response, next: NextFunction) => {
    try {
        res.send('Users List')
    } catch (err) {
        next(err);
    }
});

export default router;