// src/navigation/routes.js
import FileServerPage from "../pages/FileServerPage";
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
  {
    path: "/fileserver",
    component: FileServerPage,
  },
];

export default routes;
