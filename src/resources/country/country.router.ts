import { Request, Response, Router } from "express";
import countryService from "./country.service";

const router: Router = Router();
router.route('/').get(async (_req: Request, res: Response) => {
    const countries = await countryService.getCountries();
    res.json(countries);
});

export const countryRouter: Router = router;
