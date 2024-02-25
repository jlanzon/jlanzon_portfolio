import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import React, { useState, useEffect } from "react";

const DarkModeToggle: React.FC = () => {
  // Initialize theme state based on system preference or localStorage
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme; // Use saved theme if available
    }
    // Use system preference if no saved theme
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  // Effect to apply the theme to the html element and save it to localStorage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("class", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle theme between 'light' and 'dark'
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <button className="btn" onClick={toggleTheme}>
        {theme === "light" ? (
          <div className="h-6 w-6">
            <MoonIcon />
          </div>
        ) : (
          <div className="h-6 w-6">
            <SunIcon />
          </div>
        )}
      </button>
    </div>
  );
};

export default DarkModeToggle;
