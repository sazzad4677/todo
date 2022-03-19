const defaultTheme = require("tailwindcss/defaultTheme");
// opacity value will be 1 if no opacity defined
function opacityCalculation(variable) {
  return ({ opacityValue }) => `hsla(var(${variable}), ${opacityValue || 1} )`;
}
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          brightBlue: opacityCalculation("--primaryBrightBlue"),
        },
        light: {
          veryLightGray: opacityCalculation("--veryLightGray"),
          veryLightGrayishBlue: opacityCalculation(
            "--veryLightGrayishBlue"
          ),
          lightGrayishBlue: opacityCalculation("--lightGrayishBlue"),
          darkGrayishBlue: opacityCalculation("--darkGrayishBlue"),
          veryDarkGrayishBlue: opacityCalculation(
            "--veryDarkGrayishBlue"
          ),
        },
        dark: {
          veryDarkBlue: opacityCalculation("--veryDarkBlue"),
          veryDesaturatedBlue: opacityCalculation("--veryDesaturatedBlue"),
          lightGrayishBlueHover: opacityCalculation(
            "--lightGrayishBlueHover"
          ),
          darkGrayishBlue: opacityCalculation("--darkGrayishBlue"),
          veryDarkGrayishBlue: opacityCalculation("--veryDarkGrayishBlue"),
        },
      },
      fontFamily: {
        josef: ["JosefinSans", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        desktopLight: "url('./images/bg-desktop-light.jpg')",
        desktopDark: "url('./images/bg-desktop-dark.jpg')",
        mobileLight: "url('./images/bg-mobile-light.jpg')",
        mobileDark: "url('./images/bg-mobile-dark.jpg')",
      },
    },
  },
  plugins: [],
};
