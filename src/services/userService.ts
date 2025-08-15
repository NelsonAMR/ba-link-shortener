import { userRepository } from "../repositories";

export const getAllUsers = () => {
  return userRepository.find();
};

export const getUserById = (id: string) => {
  return userRepository.findOneBy({ id });
};
