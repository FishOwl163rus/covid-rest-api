import covidRepository from "./covid.repository";

export const getCovidData = async (country: string, date: Date) => await covidRepository.getCovidData(country, date)

export default {getCovidData}
