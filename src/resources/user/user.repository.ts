import User from "./user.entity";
import {InsertResult} from "typeorm";
import AppDataSource from "../../common/appDataSource";
import md5 from "md5";

export async function registerUser(user: User): Promise<InsertResult | null>{
    try {
        let users = await AppDataSource.getRepository(User).findBy({email: user.email})
        if (users.length > 0) {
            return null
        }
        user.password = md5(user.password)
        return await AppDataSource.getRepository(User).insert(user)
    } catch (e) {
        return new InsertResult();
    }
}


export async function loginUser(authData: any): Promise<User | null>{
    try {
        let {email, password} = authData
        password = md5(password)
        return await AppDataSource.getRepository(User).findOneBy({email: email, password: password})
    } catch (e) {
        return null;
    }
}

export default {registerUser, loginUser}
