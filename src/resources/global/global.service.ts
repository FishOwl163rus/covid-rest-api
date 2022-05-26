import globalRepository from "./global.repository";

export const getGlobal = async () => await globalRepository.getGlobal()

export default {getGlobal}
