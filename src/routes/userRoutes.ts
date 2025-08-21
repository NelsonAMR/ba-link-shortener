import { Router } from "express";
import { userController } from "../controllers";
import { validateDto } from "../middlewares";
import { CreateUserDto } from "../dtos";

export const userRoutes = Router();

userRoutes.get("/", userController.getAll);
userRoutes.get("/:id", userController.getOneById);
userRoutes.post("/", validateDto(CreateUserDto), userController.create);
