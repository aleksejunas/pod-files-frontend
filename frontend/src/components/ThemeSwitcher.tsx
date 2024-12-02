// TODO: Create a functional component button for the theme switcher

import React from "react";
import { switchTheme } from "../utils/ThemeSwitcher";

const ThemeSwitcher: React.FC = () => {
  return (
    <div>
      <button
        className="bg-gruvbox-orange text-white text-2xl font-normal p-2 m-2 rounded"
        onClick={() => switchTheme("gruvbox")}
      >
        Gruvbox Theme
      </button>
      <button
        className="bg-pastel-purple text-white text-2xl font-normal p-2 m-2 rounded"
        onClick={() => switchTheme("pastel")}
      >
        Pastel Theme
      </button>
      {/* Add buttons for other themes here */}
    </div>
  );
};

export default ThemeSwitcher;
