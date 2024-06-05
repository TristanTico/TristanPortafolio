const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
