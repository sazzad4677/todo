import React, { useState, useEffect } from "react";

export const DarkModeContext = React.createContext({
  isCurrentDarkMode: false,
  handleDarkModeToggle: () => {},
});

const ThemeProvider = (props) => {
  const [isCurrentDarkMode, setIsCurrentDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    isCurrentDarkMode
      ? localStorage.removeItem("isDarkMode")
      : localStorage.setItem("isDarkMode", "1");
    setIsCurrentDarkMode((prevState) => {
      return !prevState;
    });
  };

  useEffect(() => {
    const isDarkmode = localStorage.getItem("isDarkMode");
    if (isDarkmode === "1") {
      setIsCurrentDarkMode(true);
    }
  }, []);

  useEffect(() => {
    const root = window.document.body.parentElement;
    isCurrentDarkMode
      ? root.classList.add("dark")
      : root.classList.remove("dark");
  }, [isCurrentDarkMode]);

  const dataContext = {
    isCurrentDarkMode,
    handleDarkModeToggle,
  };

  return (
    <DarkModeContext.Provider value={dataContext}>
      {props.children}
    </DarkModeContext.Provider>
  );
};

export default ThemeProvider;
