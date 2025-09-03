import { Router } from "express";
import { linkController } from "../controllers";
import { validateDto } from "../middlewares";
import { CreateLinkDto } from "../dtos";

export const linkRoutes = Router();

linkRoutes.get("/", linkController.getAll);
linkRoutes.get("/user/:userId", linkController.getByUser);
linkRoutes.get("/:shortLink", linkController.redirectToOriginalUrl);
linkRoutes.post(
  "/",
  validateDto(CreateLinkDto),
  linkController.createShortLink,
);
linkRoutes.delete("/:id", linkController.deleteLink);
