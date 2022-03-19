import React, { useContext } from "react";
import { DarkModeContext } from "../Context/ThemeContext";
import Moon from "../images/icon-moon.svg";
import Sun from "../images/icon-sun.svg";
const Header = () => {
  const { handleDarkModeToggle, isCurrentDarkMode } =
    useContext(DarkModeContext);
  return (
    <div className="bg-mobileLight bg-cover bg-center bg-no-repeat py-16 dark:bg-mobileDark lg:bg-desktopLight dark:lg:bg-desktopDark">
      <div className="mx-auto w-full max-w-xl">
        <div className="flex justify-between px-6 pt-4 sm:px-0 sm:pt-0">
          <h1 className="font-josef text-3xl font-bold uppercase tracking-[1rem] text-white sm:text-4xl">
            TODO
          </h1>
          <button onClick={handleDarkModeToggle}>
            {isCurrentDarkMode && <img src={Moon} alt="moon" />}
            {!isCurrentDarkMode && <img src={Sun} alt="sun" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
