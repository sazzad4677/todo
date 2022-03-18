const defaultTheme = require("tailwindcss/defaultTheme");
// opacity value will be 1 if no opacity defined
function opacityCalculation(variable) {
  return ({ opacityValue }) => `hsla(var(${variable}), ${opacityValue || 1} )`;
}
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      color: {
        primary: {
          brightBlue: opacityCalculation("--primaryBrightBlue"),
        },
        light: {
          veryLightGray: opacityCalculation("--light-veryLightGray"),
          veryLightGrayishBlue: opacityCalculation("--light-veryLightGrayishBlue"),
          lightGrayishBlue: opacityCalculation("--light-lightGrayishBlue"),
          darkGrayishBlue: opacityCalculation("--light-darkGrayishBlue"),
          veryDarkGrayishBlue: opacityCalculation("--light-veryDarkGrayishBlue"),
        },
        dark: {
          veryDarkBlue: opacityCalculation("--dark-veryDarkBlue"),
          veryDesaturatedBlue: opacityCalculation("--dark-veryDesaturatedBlue"),
          lightGrayishBlueHover: opacityCalculation("--dark-lightGrayishBlueHover"),
          darkGrayishBlue: opacityCalculation("--dark-darkGrayishBlue"),
          veryDarkGrayishBlue: opacityCalculation("--dark-veryDarkGrayishBlue"),
        },
      },
      fontFamily: {
        josef: ["JosefinSans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
