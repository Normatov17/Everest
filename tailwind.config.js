/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        575: "575px",
      },
      maxWidth: {
        base: "1360px",
      },
      colors: {
        brands: {
          navbarBG: "#E8EFF5",
          textRang: "#0E192E",
          form: "#D8E1EA",
          buttonRang: "#2A79CC",
        },
      },
      fontFamily: {
        poppins: "Poppins, sans-serif",
      },
    },
  },
  plugins: [],
};
