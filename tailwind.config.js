/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-img": "url('./src/assets/bg2.jpg')",
      },
    },
  },
  plugins: [],
};
