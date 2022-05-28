import axios from "axios";
import {Country} from "../country/country.entity";
import {plainToInstance} from "class-transformer";

import dotenv from "dotenv";
import Global from "../global/global.entity";
import Covid from "../covid/covid.entity";
dotenv.config();

const api = axios.create({
    baseURL: process.env['API_URL'],
});

export async function fetchCountries(): Promise<Country[]> {
    let response = await api.get('countries')
    return plainToInstance(Country, response.data as any[]);
}

export async function fetchGlobal(): Promise<Global> {
    let response = await api.get('summary')
    return plainToInstance(Global, response.data['Global']);
}

export async function fetchCovidData(country: string): Promise<Covid[]> {
    let response = await api.get(`/dayone/country/${country}`)
    return plainToInstance(Covid, response.data as any[]);
}

/*function addHoursToDate(objDate: Date, intHours: number) {
    let numberOfMlSeconds = objDate.getTime();
    let addMlSeconds = (intHours * 60) * 60 * 1000;
    return new Date(numberOfMlSeconds + addMlSeconds);
}*/
