import { Router } from "./router/Router.js";
import { routes } from "./router/routes.js";

const contentElement = document.getElementById("app");
const router = new Router(routes, contentElement);

router.resolveRoute();

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const path = e.target.getAttribute("href");
    router.navigate(path);
  });
});
