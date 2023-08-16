/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins", sans-serif'],
      },
      animation: {
        typing: "pulse 1s ease-in-out infinite",
        slideIn: "slideIn 1s ease-in-out normal",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateY(3rem)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
