import { AppDataSource } from "../config/dbConfig";
import { CreateUserDto, UpdateUserDto } from "../dtos";
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

export const update = (id: string, updateData: UpdateUserDto) => {
  return userRepository.update(id, updateData);
};

export const remove = (id: string) => {
  return userRepository.delete(id);
};
