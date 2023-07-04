/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    container: {
      padding: {
        default: '30px',
        lg: '0',
      },
    },
    screen: {
      sm : '640px',
      md : '768px',
      lg : '1024px',
      xl : '1440px',
    },
    extends: {
      colors : {
        primary : '#222222',
        secondary : '#F5E6E0', 
      },
      backgroundImage: {
      },
    },
  },
  plugins: [],
};
