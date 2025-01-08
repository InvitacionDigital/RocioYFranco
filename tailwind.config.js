/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      boxShadow: {
        'primary': '0px 0px 12px -2px rgba(87,87,87,0.5)',
        'full': '0 0 490px 2000px rgba(30,30,30,0.8)',
        'color': '0 0 20px -7px rgba(255,192,203,0.5)',
        'full': '0 0 490px 7000px rgba(30,30,30,0.8)',
        '3xl': '0 0 20px -1px rgba(104,195,183,1)',
        '4xl': '0 0 20px -10px rgba(30,30,30,0.8)',
      },
      colors: {
        'primary': 'rgba(40, 135, 190, 1)',
        'secondary': '#FFB6C1',
        'white': '#FFFFFF',
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'pop': ['Poppins', 'sans-serif'],
        'play': ['Playfair Display', 'serif'],
        'dance': ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}