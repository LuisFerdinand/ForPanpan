/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'noto-sans-tc': ['"Noto Sans TC"', 'sans-serif'],
        'poppins': ['"Poppins"', 'sans-serif'],
      },
      colors: {
        primary: '#111827',
        secondary: '#6b7280'
      },
      transitionDuration: {
        '2000': '2000ms',
      }
    },
  },
  plugins: [],
};
