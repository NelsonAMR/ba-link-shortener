import { AppDataSource } from "../config/dbConfig";
import { User } from "../models";

export const userRepository = AppDataSource.getRepository(User);
