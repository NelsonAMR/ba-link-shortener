import { AppDataSource } from "../config/dbConfig";
import { CreateUserDto } from "../dtos";
import { User } from "../models";

export const userRepository = AppDataSource.getRepository(User);

export const getAll = () => {
  return userRepository.find();
};

export const getOneById = (id: string) => {
  return userRepository.findOneBy({ id });
};

export const create = (createUserDto: CreateUserDto) => {
  const user = userRepository.create(createUserDto);
  return userRepository.save(user);
};
