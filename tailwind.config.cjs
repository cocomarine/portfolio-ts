/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
            '0%': { transform: 'rotate(12.0deg)' },
            '15%': { transform: 'rotate(26.0deg)' },
            '30%': { transform: 'rotate(4.0deg)' },
            '40%': { transform: 'rotate(26.0deg)' },
            '50%': { transform: 'rotate(8.0deg)' },
            '60%': { transform: 'rotate(22.0deg)' },
            '70%': { transform: 'rotate(12.0deg)' },
            '100%': { transform: 'rotate(12.0deg)' },
        },
      },
      animation: {
        wave: 'wave 2s 2',
      },
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "taupe": "#4c453a",
        "black": "#060606",
        "primary-100": "#A6DDD9",
        "primary-300": "#7ACDC7",
        "primary-500": "#3EA39C",
        "secondary-400": "#FED9D7", 
        "secondary-500": "#FCA09C", 
      }, 
      backgroundImage: (theme) => ({
        "gradient-yellowred": "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"] 
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
      lg: "1900px"
    }
  },
  plugins: [],
}
