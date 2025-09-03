import { nanoid } from "nanoid";
import { AppDataSource } from "../config/dbConfig";
import { Link } from "../models";
import { addWeeks, addMonths } from "date-fns";

export const linkRepository = AppDataSource.getRepository(Link);

export const getAll = () => {
  return linkRepository.find();
};

export const getByUser = (userId: string) => {
  return linkRepository.find({ where: { user: { id: userId } } });
};

export const redirectToOriginalUrl = async (shortLink: string) => {
  const link = await linkRepository.findOneBy({ shortLink });
  if (!link) {
    throw new Error("Link not found");
  }
  return link.originalLink;
};

export const createShortLink = async (originalLink: string, userId: string) => {
  const shortLink = nanoid(6);

  const expiresAt = userId ? addMonths(new Date(), 3) : addWeeks(new Date(), 1);

  const link = linkRepository.create({
    originalLink,
    shortLink,
    user: { id: userId },
  });
  return linkRepository.save(link);
};

export const deleteLink = (id: string) => {
  return linkRepository.delete(id);
};
