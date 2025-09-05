import { Request, Response, NextFunction } from "express";
import { RolePermissions } from "../utils/rolePermissions";
import { Permission, Role } from "../utils/enums";
import { User } from "../models";

interface AuthenticatedRequest extends Request {
  user?: User;
}

export function authorize(requiredPermissions: Permission[]) {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const user = req.user; // asumiendo que ya seteas user en el req vía JWT
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const role: Role = user.role || Role.GUEST;
    const userPermissions = RolePermissions[role] || [];

    const hasAccess = requiredPermissions.every((perm) =>
      userPermissions.includes(perm),
    );

    if (!hasAccess) {
      return res.status(403).json({ message: "Forbidden" });
    }

    next();
  };
}
