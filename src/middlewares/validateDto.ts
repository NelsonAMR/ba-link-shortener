import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { Request, Response, NextFunction } from "express";

export const validateDto = <T extends object>(dtoClass: new () => T) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    // Convertimos el body en la clase correspondiente
    const dtoInstance = plainToInstance(dtoClass, req.body);

    const errors = await validate(dtoInstance, {
      whitelist: true,
      forbidNonWhitelisted: true,
      forbidUnknownValues: true,
    });

    if (errors.length > 0) {
      return res.status(400).json({
        message: "Validation failed",
        errors: errors.map((err) => ({
          field: err.property,
          constraints: err.constraints,
        })),
      });
    }

    // Tipamos body correctamente 👇
    req.body = dtoInstance as T;

    next();
  };
};
