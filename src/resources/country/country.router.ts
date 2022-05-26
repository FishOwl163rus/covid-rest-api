import { Request, Response, Router } from "express";
import countryService from "./country.service";
import {StatusCodes} from 'http-status-codes';
const router: Router = Router();
router.route('/').get(async (_req: Request, res: Response) => {
    const countries = await countryService.getCountries();
    if (!countries) {
        res.status(StatusCodes.NO_CONTENT).end()
    }
    res.status(StatusCodes.OK).json(countries);
});

export const countryRouter: Router = router;
