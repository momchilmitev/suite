module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#172339',
        gray: '#49566D',
        creamy: "#F3EDE7",
        'creamy-white': '#FAF8F6'
      },
      fontFamily: {
        epilogue: 'Epilogue, sans-serif'
      }
    },
  },
  plugins: [],
}

