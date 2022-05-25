import {fetchCountries} from "../resources/axios/axios.api";
import countryRepository from "../resources/country/country.repository";
import AppDataSource from "../common/appDataSource";
import {Country} from "../resources/country/country.entity";

export async function cleanUpDatabase() {
    await AppDataSource.getRepository(Country).clear()
}

export async function loadCountriesAsync() {
    let countries = await fetchCountries();
    await countryRepository.insertCountries(countries);
}
