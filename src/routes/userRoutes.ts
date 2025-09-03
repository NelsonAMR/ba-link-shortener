import { Router } from "express";
import { userController } from "../controllers";
import { validateDto } from "../middlewares";
import { CreateUserDto, UpdateUserDto } from "../dtos";

export const userRoutes = Router();

userRoutes.get("/", userController.getAll);
userRoutes.get("/:id", userController.getOneById);
userRoutes.post("/", validateDto(CreateUserDto), userController.create);
userRoutes.put("/:id", validateDto(UpdateUserDto), userController.update);
userRoutes.delete("/:id", userController.remove);
