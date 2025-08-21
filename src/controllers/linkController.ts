import type { Request, Response } from "express";
import { linkService } from "../services";
import { CreateLinkDto } from "../dtos";

export const getAll = async (req: Request, res: Response) => {
  const links = await linkService.getAll();
  res.json(links);
};

export const getByUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  if (!userId) {
    return res.status(400).json({ message: "User ID is required" });
  }
  const links = await linkService.getByUser(userId);

  res.json(links);
};

export const redirectToOriginalUrl = async (req: Request, res: Response) => {
  const { shortLink } = req.params;
  if (!shortLink) {
    return res.status(400).json({ message: "Short link is required" });
  }
  const link = await linkService.redirectToOriginalUrl(shortLink);
  if (!link) {
    return res.status(404).json({ message: "Link not found" });
  }
  res.redirect(link);
};

export const createShortLink = async (
  req: Request<{}, {}, CreateLinkDto>,
  res: Response,
) => {
  const { originalLink, userId } = req.body;
  const link = await linkService.createShortLink(originalLink, userId);
  res.status(201).json(link);
};
