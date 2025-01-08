/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        yeseva: ['"Yeseva One"', 'cursive'],
        workSans: ['"Work Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
