/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['solaire', 'sans-serif'],
      extend: {},
      serif: ['bildeberg', 'serif'],
      mono:['dominica', 'monospace'],
    },
    
    colors: {
      theoblue : '#599bfc',
    },
    plugins: [],
  }
}