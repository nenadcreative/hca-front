const defaultTheme = require("tailwindcss/defaultTheme");

// Example preset
module.exports = {
  theme: {
    colors: {
      brand: {
        blue: "#00A5E4",
        blue2: "#0395CE",
        yellow: "#FDC72F",
        yellowDark: "#E4B32A",
      },
      accent: {
        green: "#91B490",
      },
      dark: {
        1: "#151E2D",
        2: "#2C3542",
        3: "#3C4450",
      },
      gray: {
        DEFAULT: "#F5FBFE",
      },
      white: {
        DEFAULT: "#FFFFFF",
      },
    },
    fontSize: {
      "body-xs": ["0.875rem", "1.5"],
      "body-sm": ["1rem", "1.5"],
      "body-md": ["1.125rem", "1.5"],
      "body-lg": ["1.25rem", "1.4"],
      "display-xs": ["1rem", "1.5"],
      "display-sm": ["1.25rem", "1.25"],
      "display-md": ["1.5rem", "1.3"],
      "display-lg": ["2rem", "1.3"],
      "display-xl": ["3rem", "1.2"],
      "display-2xl": ["3.75rem", "1.3"],
      "display-3xl": ["4rem", "1.2"],
      "display-4xl": ["5rem", "1.2"],
    },
    fontFamily: {
      display: ["Libre Baskerville", ...defaultTheme.fontFamily.serif],
      body: ["Titillium Web", ...defaultTheme.fontFamily.sans],
    },
    fontWeight: {
      regular: "400",
      semibold: "600",
      bold: "700",
      black: "900",
    },
    extend: {
      spacing: {
        18: "4.5rem",
        38: "38rem",
      },
      borderWidth: {
        12: "12px",
      },
      borderRadius: {
        "3xl": "1.25rem",
      },
      backgroundImage: {
        "feature-bg": "url('/Images/feature-bg.svg')",
        "section-bg": "url('/Images/section-bg.svg')",
      },
    },
  },
};
