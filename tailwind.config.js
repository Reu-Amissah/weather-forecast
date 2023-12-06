/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        input: "#00161D",
        input2: "#E1E1E1",
        light: "#A0A0A0",
        dark: "#1F1F1F",
      },
      fontFamily: {
        body: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
