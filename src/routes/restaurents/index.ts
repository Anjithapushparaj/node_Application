

import { Router, Request, Response, NextFunction} from 'express';
import  Restaurents from '../../schemas/restaurents';
import { Document } from 'mongoose';

const router: Router = Router();

/**
 * Get users list.
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
router.get('/', (req: Request, res: Response, next: NextFunction) => {
    try {
        Restaurents.find({}).then((result: Document[]) => {
            res.json(result);
        })
    } catch (err) {
        next(err);
    }
});

/**
 * Get users list.
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
 router.get('/restaurentId/:restId', (req: Request, res: Response, next: NextFunction) => {
     const { restId } = req.params;
    
        Restaurents.findOne({ restaurentId: restId }).then((result: Document) => {
            res.json(result);
        })
        .catch((err) => {
            next(err);
        })
});

/**
 * Get users list.
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
 router.post('/', (req: Request, res: Response, next: NextFunction) => {
    const { restId, restName, location, foodOptions, rating, isOpen, isVeg, diningOnly} = req.body;
    console.log(req.body);
    
    Restaurents.insertMany([
        { 
        restaurentId: restId , 
        restaurentName: restName,
        location: location,
        foodOptions: foodOptions,
        rating: rating,
        isOpen: isOpen,
        isVeg: isVeg,
        diningOnly:diningOnly
        }
    ])
    .then((result: Document[]) => {
        res.json(result);
    }).catch((err) => {
        // console.error("Duplicate restaurentId");
        // next( new Error("Duplicate restaurentId"))
        next(err);
    })
});

/**
 * Get users list.
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
 router.put('/:restId', (req: Request, res: Response, next: NextFunction) => {
    const { restId } = req.params;
    const { restName, location, foodOptions, rating, isOpen, isVeg, diningOnly} = req.body;
    console.log(req.body);
    
       Restaurents.updateOne(
            {
                restaurentId:restId 
            },
            { 
                $set:{
                    restaurentName: restName,
                    location: location,
                    foodOptions: foodOptions,
                    rating: rating,
                    isOpen: isOpen,
                    isVeg: isVeg,
                    diningOnly:diningOnly
                }
            }
        ).then((result: Document[]) => {
           res.json(result);
       })
       .catch((err) => {
        next(err);
    })   
            
            
       
});


/**
 * Get users list.
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
 router.put('/:restId/:status', (req: Request, res: Response, next: NextFunction) => {
    const { restId, status } = req.params;
//    const sstatus = (status === "true") ? true:false; 
    
       Restaurents.updateMany(
            {
                restaurentId:restId 
            },
            { 
                $set:{
                    isOpen: status
                }
            }
        ).then((result: Document[]) => {
           res.json(result);
       }) .catch((err) => {
        next(err);
    })
  
});

/**
 * Get users list.
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
 router.put('/update/status/:status', (req: Request, res: Response, next: NextFunction) => {
    const { status} = req.params;
    const { restIds} =req.body;
    console.log("rest", req.body);
//    const sstatus = (status === "true") ? true:false; 
    
       Restaurents.updateMany(
            {
                restaurentId:{ $in: restIds} 
            },
            { 
                $set:{
                    isOpen: status
                }
            }
        ).then((result: Document[]) => {
           res.json(result);
       }) .catch((err) => {
        next(err);
    })
  
});

/**
 * Get users list.
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
 router.put('/update/status/disable/all', (req: Request, res: Response, next: NextFunction) => {
    
       Restaurents.updateMany(
            {},
            { 
                $set:{
                    isOpen: false
                }
            }
        ).then((result: Document[]) => {
           res.json(result);
       })
       .catch((err) => {
        next(err);
    })
});


/**
 * Get users list.
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
 router.put('/update/status/disable/all', (req: Request, res: Response, next: NextFunction) => {
    
       Restaurents.updateMany(
            {},
            { 
                $set:{
                    isOpen: false
                }
            }
        ).then((result: Document[]) => {
           res.json(result);
       }) .catch((err) => {
        next(err);
    })
  
});

export default router;