/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bg1: "#F9F9FA",
        bg2: "#EDEEFC",
        bg3: "#E6F1FD",
        bg4: "#F9F9FA",
      },
      fontSize:{
        t14: "14px"
      },
    },
  },
  plugins: [],
}

