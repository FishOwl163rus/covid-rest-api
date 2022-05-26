import {fetchCountries, fetchGlobal} from "../resources/axios/axios.api";
import countryRepository from "../resources/country/country.repository";
import globalRepository from "../resources/global/global.repository";
import AppDataSource from "../common/appDataSource";
import Country from "../resources/country/country.entity";
import Global from "../resources/global/global.entity";

export async function cleanUpDatabase() {
    await AppDataSource.getRepository(Country).clear()
    await AppDataSource.getRepository(Global).clear()
}

export async function loadCountriesAsync() {
    let countries = await fetchCountries();
    await countryRepository.insertCountries(countries);
}

export async function loadGlobalAsync() {
    let global = await fetchGlobal();
    await globalRepository.insertGlobal(global);
}
