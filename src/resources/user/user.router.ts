import {Request, Response, Router} from "express";
import userRepository from "./user.repository";
import {plainToInstance} from "class-transformer";
import User from "./user.entity";
import jwt from 'jsonwebtoken'
import dotenv from "dotenv";
import {logger} from "../../middleware";
const router: Router = Router();
dotenv.config()

router.route('/login').post(async (req: Request, res: Response) => {
    const userResult = await userRepository.loginUser(req.body);
    if (!userResult) {
        res.send({ status: 0, data: null })
    } else {
        let token = jwt.sign({ data: userResult }, process.env['JWT_SECRET_KEY']!)
        res.send({ status: 1, data: userResult, token: token });
    }
});


router.route('/register').post(async (req: Request, res: Response) => {
    let user = plainToInstance(User, req.body)
    logger.info(JSON.stringify(user))
    const userResult = await userRepository.registerUser(user);
    if (!userResult) {
        res.send({ status: 0, data: null })
    } else {
        let token = jwt.sign({ data: user }, process.env['JWT_SECRET_KEY']!)
        res.send({ status: 1, data: user, token: token });
    }
});

export const userRouter: Router = router;
