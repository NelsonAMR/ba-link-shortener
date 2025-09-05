export enum Role {
  ADMIN = "admin",
  GUEST = "guest",
  USER = "user",
  USER_PREMIUM = "user_premium",
}

export enum Permission {
  VIEW_ALL_LINKS = "view_all_links",
  VIEW_USER_LINKS = "view_user_links",
  REDIRECT_LINK = "redirect_link",
  CREATE_LINK = "create_link",
  DELETE_LINK = "delete_link",

  VIEW_USERS = "view_users",
  VIEW_USER = "view_user",
  CREATE_USER = "create_user",
  UPDATE_USER = "update_user",
  DELETE_USER = "delete_user",
}
