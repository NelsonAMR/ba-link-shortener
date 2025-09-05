// utils/rolePermissions.ts
import { Role, Permission } from "./enums";

export const RolePermissions: Record<Role, Permission[]> = {
  [Role.GUEST]: [
    Permission.REDIRECT_LINK,
    Permission.CREATE_LINK, // opcional, depende de tu lógica
  ],
  [Role.USER]: [
    Permission.VIEW_USER_LINKS,
    Permission.REDIRECT_LINK,
    Permission.CREATE_LINK,
    Permission.DELETE_LINK,
  ],
  [Role.USER_PREMIUM]: [
    Permission.VIEW_USER_LINKS,
    Permission.REDIRECT_LINK,
    Permission.CREATE_LINK,
    Permission.DELETE_LINK,
    Permission.VIEW_ALL_LINKS,
  ],
  [Role.ADMIN]: [
    Permission.VIEW_ALL_LINKS,
    Permission.VIEW_USER_LINKS,
    Permission.REDIRECT_LINK,
    Permission.CREATE_LINK,
    Permission.DELETE_LINK,
    Permission.VIEW_USERS,
    Permission.VIEW_USER,
    Permission.CREATE_USER,
    Permission.UPDATE_USER,
    Permission.DELETE_USER,
  ],
};
