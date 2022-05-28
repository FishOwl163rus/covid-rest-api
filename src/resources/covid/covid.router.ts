import { Request, Response, Router } from "express";
import covidService from './covid.service'
import {StatusCodes} from "http-status-codes";
import moment from "moment-timezone";
//import moment from "moment-timezone";

const router: Router = Router();
router.route('/:country/:date').get(async (req: Request, res: Response) => {
    const covid = await covidService.getCovidData(req.params['country'] || '', checkDate(req.params['date']));
    if (covid) {
        res.status(StatusCodes.OK).json(covid);
    } else {
        res.status(StatusCodes.OK).end();
    }
});

function checkDate(date: string | undefined): Date {
    if(date === undefined) {
        return new Date(moment.utc(new Date().toUTCString()).tz("Europe/Minsk").toISOString());
    } else {
        return new Date(moment.utc(new Date(date).toUTCString()).tz("Europe/Minsk").toISOString());
    }
}
export const covidRouter: Router = router;
