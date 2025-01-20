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
        bg5: "#FFFFFF",
        SPurple: "#AF52DE",
      },
      backgroundImage: {
        'OVHGradient1': 'linear-gradient(to bottom , #007AFF 60%, #ffffff 100%)',
        'OVHGradient2': 'linear-gradient(to bottom, #000000 , #ffffff)',
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

