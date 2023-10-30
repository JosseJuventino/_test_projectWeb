/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "black-custom": "#1B1B1B;",
        "hover-black-custom": "#F5F7F2",
        "text-secondary": "#686868",
        "background-primary": "#F5F7F2;",
      },
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
        secondary: ["Pontano Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
