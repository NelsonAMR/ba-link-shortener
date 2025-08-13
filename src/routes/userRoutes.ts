import { Router } from "express";
import { userController } from "../controllers/index.js";

export const userRoutes = Router();

userRoutes.get("/", userController.getAllUsers);
