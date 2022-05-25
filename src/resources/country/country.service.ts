import countryRepository from "./country.repository";

export const getCountries = async () => await countryRepository.getCountries()

export default {getCountries}
