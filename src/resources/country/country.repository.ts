import AppDataSource from "../../common/appDataSource";
import {Country} from "./country.entity";
import {InsertResult} from "typeorm";
import {logger} from "../../middleware";

export async function insertCountries(countries: Country[]): Promise<InsertResult> {
    return AppDataSource.getRepository(Country)
        .insert(countries)
        .catch((reason: Error) => logger.error(reason));
}

export async function getCountries(): Promise<Country[]> {
    return AppDataSource.getRepository(Country)
        .find()
        .catch((reason: Error) => logger.error(reason));
}

export default {insertCountries, getCountries}
