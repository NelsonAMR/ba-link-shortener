import type { Request, Response } from "express";
import { userService } from "../services";
import { validate as isUUID } from "uuid";
import { CreateUserDto } from "../dtos";

export const getAll = async (req: Request, res: Response) => {
  const users = await userService.getAll();
  res.json(users);
};

export const getOneById = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id || !isUUID(id)) {
    return res.status(400).json({ message: "Invalid UUID format" });
  }

  const user = await userService.getOneById(id);
  res.json(user);
};

export const create = async (
  req: Request<{}, {}, CreateUserDto>,
  res: Response,
) => {
  const createUserDto = req.body;

  const newUser = await userService.create(createUserDto);
  res.status(201).json(newUser);
};

export const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updateData = req.body;

  if (!id || !isUUID(id)) {
    return res.status(400).json({ message: "Invalid UUID format" });
  }

  const userUpdated = await userService.update(id, updateData);
  res.status(204).json(userUpdated);
};

export const remove = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id || !isUUID(id)) {
    return res.status(400).json({ message: "Invalid UUID format" });
  }

  await userService.remove(id);
  res.status(204).send("User deleted successfully");
};
