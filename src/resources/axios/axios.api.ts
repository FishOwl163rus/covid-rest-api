import axios from "axios";
import {Country} from "../country/country.entity";
import {plainToInstance} from "class-transformer";

import dotenv from "dotenv";
dotenv.config();

const api = axios.create({
    baseURL: process.env['API_URL'],
});

export async function fetchCountries(): Promise<Country[]> {
    let response = await api.get('countries')
    return plainToInstance(Country, response.data as any[]);
}

