import { Request, Response, Router } from "express";
import globalService from './global.service'
import {StatusCodes} from "http-status-codes";

const router: Router = Router();
router.route('/').get(async (_req: Request, res: Response) => {
    const global = await globalService.getGlobal();
    if (!global) {
        res.status(StatusCodes.NO_CONTENT).end()
    }
    res.status(StatusCodes.OK).json(global);
});

export const globalRouter: Router = router;
