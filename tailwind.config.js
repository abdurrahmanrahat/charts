/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "776px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1440px",
    },
    extend: {
      colors: {
        primary: "#0095CF"
      },
      boxShadow: {
        myShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      }
    },
  },
  plugins: [],
}