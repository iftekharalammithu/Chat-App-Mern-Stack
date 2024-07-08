/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: "#6cf542", // Add your custom color here
      },
    },
  },
  plugins: [daisyui],
};
