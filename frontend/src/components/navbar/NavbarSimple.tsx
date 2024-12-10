// TODO: Alter the Navbar to the one in the provided in the following link: https://www.material-tailwind.com/docs/react/navbar

import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";

const Navbar = () => {
  return (
    <nav className="navbar bg-[orange] p-2">
      <div className="flex flex-row  w-full">
        <h1>File Server</h1>
        <div className="links flex flex-row mx-8 justify-around">
          <Link className="text-fg-primary hover:text-fg-secondary" to="/">
            Home
          </Link>
          <Link
            className="text-fg-primary hover:text-fg-secondary"
            to="/welcome"
          >
            Welcome
          </Link>
          <Link
            className="text-fg-primary hover:text-fg-secondary"
            to="/fileserver"
          >
            File Server
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
