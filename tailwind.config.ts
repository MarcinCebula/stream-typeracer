import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sansDigit: ["Chakra Petch", "sans-serif"],
        sans: ["Roboto", "sans-serif"],      
      },
      colors: {
        neonpink: {
          DEFAULT: "#FF0083",
          50: "#FFE0F0",
          100: "#FFCCE6",
          200: "#FFA3D2",
          300: "#FF7ABF",
          400: "#FF52AB",
          500: "#FF2997",
          600: "#FF0083",
          700: "#C70066",
          800: "#8F0049",
          900: "#57002D",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
