import AppDataSource from "../../common/appDataSource";
import {Country} from "./country.entity";
import {InsertResult} from "typeorm";

export async function insertCountries(countries: Country[]): Promise<InsertResult> {
    try {
        return await AppDataSource.getRepository(Country).insert(countries);
    } catch (ex) {
        return new InsertResult()
    }
}

export async function getCountries(): Promise<Country[] | null> {
    try {
        return await AppDataSource.getRepository(Country).find();
    } catch (ex) {
        return null
    }
}

export default {insertCountries, getCountries}
