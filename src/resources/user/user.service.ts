import userRepository from "./user.repository";
import User from "./user.entity";

export const loginUser = async (authData: any) => await userRepository.loginUser(authData)
export const registerUser = async (user: User) => await userRepository.registerUser(user)

export default {loginUser, registerUser}
