// FIX: Now I have to add the routes to the Routes component, and also add a default route to the HomePage component. I also have to import the routes from the routes file.

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";

import HomePage from "../pages/HomePage";
import WelcomePage from "../pages/WelcomePage";
import FileServerPage from "../pages/FileServerPage";
import ContactPage from "../pages/ContactPage";

const AppNavigator = () => {
  return (
    <Router>
      <Routes>
        {routes.map(
          (
            route: { path: string; component: React.ComponentType },
            index: number,
          ) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ),
        )}
        <Route path="/" element={<HomePage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/fileserver" element={<FileServerPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default AppNavigator;
