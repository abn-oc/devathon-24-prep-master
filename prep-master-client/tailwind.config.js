/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6d28d9",
          50: "#f5f3ff",
          100: "#e6d9ff",
          150: "#d6baff",
        },
      },
    },
  },
  plugins: [],
};
