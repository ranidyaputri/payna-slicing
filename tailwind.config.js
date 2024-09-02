/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'bwa-current': '#F5F6FB',
        'bwa-current-darker' : '#EFF0F5',
        'bwa-black': '#070F18',
        'bwa-black-lighter': '#575455',
        'bwa-red': '#F75C4E',
        'bwa-blue': '#1F7CFF',
        'bwa-pink': '#FF1FB3',
        'bwa-orange': '#F7954E',
        'bwa-dark-navy': '#191046',
        'bwa-indigo': '#5C4EF7',
      },
      fontFamily: {
        'poppins': ["Poppins", 'sans-serif'],
      },
    },
  },
  plugins: [],
}

