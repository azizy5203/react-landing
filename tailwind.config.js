/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // All Media Quires Start With Min Width
    screens: {
      xs: "350px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
      "3xl": "1680px",
    },

    fontSize: {
      base: "1rem",
      xl: [
        "1.25rem",
        {
          lineHeight: "2",
          fontWeight: "700",
        },
      ],
      "2xl": ["1.5rem", {}],
      "6xl": [
        "4rem",
        {
          fontWeight: "700",
        },
      ],
    },

    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },

    outlineWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
  },
};
