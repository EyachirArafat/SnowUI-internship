/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
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
        bg5: "#FFFFFF"
      },
      fontSize:{
        t14: "14px"
      },
      screens: {
        md2: "1111px",
        md3: "900px"
      }
    },
  },
  plugins: [],
}

