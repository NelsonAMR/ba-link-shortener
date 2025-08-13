import type { Request, Response } from "express";
import { userService } from "../services/index.js";

export const getAllUsers = (req: Request, res: Response) => {
  const users = userService.getAllUsers();
  res.json(users);
};
