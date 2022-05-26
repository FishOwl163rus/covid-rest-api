import AppDataSource from "../../common/appDataSource";
import Global from "./global.entity";
import {InsertResult} from "typeorm";

export async function getGlobal(): Promise<Global | null> {
    try {
        return await AppDataSource.getRepository(Global).createQueryBuilder().select().orderBy('date', "DESC").getOne();
    } catch (ex) {
        return null;
    }
}

export async function insertGlobal(global: Global): Promise<InsertResult> {
    try {
        return await AppDataSource.getRepository(Global).insert(global);
    } catch (ex) {
        return new InsertResult()
    }
}

export default {getGlobal, insertGlobal}
