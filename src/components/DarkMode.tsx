import { useEffect, useState } from "react";
import "../styles/DarkMode.css";

const LIGHT = "light";
const DARK = "dark";

export function DarkMode() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? LIGHT);

  useEffect(() => {
    document.body.classList.add(theme);
    return () => {
      document.body.classList.remove(theme);
    };
  }, [theme]);

  const switchTheme = () => {
    if (theme === DARK) {
      document.body.classList.replace(DARK, LIGHT);
      localStorage.setItem("theme", LIGHT);
      setTheme(LIGHT);
    } else {
      document.body.classList.replace(LIGHT, DARK);
      localStorage.setItem("theme", DARK);
      setTheme(DARK);
    }
  };

  return (
    <button id="darkMode" onClick={switchTheme} />
  );
}

export default DarkMode;
