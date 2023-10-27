import React, { Component, useEffect, useState } from "react";
import "../styles/DarkMode.css";

export function DarkMode() {
  const lightTheme = "light";
  const darkTheme = "dark";
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");
  const [text, setText] = useState(theme === lightTheme ? "Sun" : "Moon");

  useEffect(() => {
    document.body.classList.add(theme);
    return () => {
      document.body.classList.remove(theme);
    };
  }, [theme]);

  const switchTheme = () => {
    if (theme === darkTheme) {
      document.body.classList.replace(darkTheme, lightTheme);
      localStorage.setItem("theme", "light");
      setTheme(lightTheme);
    } else {
      document.body.classList.replace(lightTheme, darkTheme);
      localStorage.setItem("theme", "dark");
      setTheme(darkTheme);
    }
    setText(theme === lightTheme ? "Sun" : "Moon");
  };

  return (
    <button id="darkMode" onClick={switchTheme}>
      {text}
    </button>
  );
}

export default DarkMode;
