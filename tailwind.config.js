/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      fontFamily: {
        'sono': ['Sono', 'sans-serif'],
  
      },
      backgroundImage: {
        'saya': ["url('./asset/1.jpg')"]
      }
    },
  },
  plugins: [],
}
