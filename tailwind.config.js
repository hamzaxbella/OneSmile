/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['38px', '48px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        Inria: ['Inria Serif', 'sans-serif'],
        Cairo: ['Cairo', 'sans-serif'],

      },
      colors: {
        'primary': "#E8B894",
        'normal-cream' : '#E6CDB9',
        "light-cream": "#EFE2D9",
        "dark-cream" : "#BEAB9D",
        "browney-cream": "#C7926A",
        "white-smoke": "#F6FAFA",
        "text-gray" : "#1E1E1E"
      },
      boxShadow: {
        'extra': '0 20px 70px rgba(0, 0, 0, 0.1)'
      },

    },
  },
  plugins: [],
}