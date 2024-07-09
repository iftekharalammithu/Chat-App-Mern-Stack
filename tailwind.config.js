/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: "#6cf542", // Add your custom color here
      },
      borderWidth: {
        2: "2px",
      },
      borderColor: {
        "white-400": "#b3b3b3", // Adjust this to your desired color
      },
    },
  },
  plugins: [daisyui],
};
