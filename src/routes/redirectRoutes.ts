import { Router } from "express";
import { linkController } from "../controllers";

export const redirectRoutes = Router();

redirectRoutes.get("/:shortLink", linkController.redirectToOriginalUrl);
