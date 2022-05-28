import AppDataSource from "../../common/appDataSource";
import {InsertResult} from "typeorm";
import Covid from "./covid.entity";
import {fetchCovidData} from "../axios/axios.api";

export async function getCovidData(country: string, date: Date): Promise<Covid[] | null> {
    try {
        let fixedTime = addHoursToDate(date, 3).toISOString();
        let covid = await AppDataSource
        .getRepository(Covid)
        .createQueryBuilder('co')
        .where('co.date >= :date', {date: fixedTime})
        .andWhere('co.countryCode = :country', {country: country})
        .getMany()

        if (covid.length > 0) {
            return covid
        } else {
            let fetchedData = await fetchCovidData(country);
            if (fetchedData.length === 0) {
                return null
            } else {
                await insertCovidData(fetchedData)
                return await getCovidData(country, date)
            }
        }

    } catch (ex) {
        return null;
    }
}

function addHoursToDate(objDate: Date, intHours: number) {
    let numberOfMlSeconds = objDate.getTime();
    let addMlSeconds = (intHours * 60) * 60 * 1000;
    return new Date(numberOfMlSeconds + addMlSeconds);
}

export async function insertCovidData(covid: Covid[]): Promise<InsertResult> {
    try {
        return await AppDataSource.getRepository(Covid).insert(covid);
    } catch (ex) {
        return new InsertResult()
    }
}


export default {getCovidData, insertCovidData}
