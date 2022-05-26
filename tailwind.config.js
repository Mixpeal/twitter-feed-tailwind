module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:{
          high: "#1D9BF0"
        },
        border: {
          main: "#EFF3F4"
        },
        default: {
          high: "#0F1419",
          medium: "#526471"
        },
        bg: {
          main: "#F7F9F9",
          hover: "#F1F4F4"
        }
      }
    },
  },
  plugins: [],
}
