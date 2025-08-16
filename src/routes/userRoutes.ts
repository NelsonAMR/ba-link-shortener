import { Router } from "express";
import { userController } from "../controllers";

export const userRoutes = Router();

userRoutes.get("/", userController.getAll);
userRoutes.get("/:id", userController.getOneById);
userRoutes.post("/", userController.create);
