import { homeView } from "../views/homeView.js";
import { feedView } from "../views/feedView.js";
import { loginView } from "../views/loginView.js";
import { postView } from "../views/postView.js";
import { registerView } from "../views/registerView.js";
import { profileView } from "../views/profileView.js";

export const routes = {
  "/": homeView,
  "/feed": feedView,
  "/login": loginView,
  "/post": postView,
  "/register": registerView,
  "/profile": profileView,
};
