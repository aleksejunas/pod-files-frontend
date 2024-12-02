// src/navigation/routes.js
import HomePage from "../pages/HomePage";
import WelcomePage from "../pages/WelcomePage";

export const routes = [
  {
    path: "/home",
    component: HomePage,
  },
  {
    path: "/welcome",
    component: WelcomePage,
  },
];

export default routes;
