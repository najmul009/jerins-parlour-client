module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        jerinstheme: {
          primary: "#F63E7B",
          secondary: "#C6FFE0",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "valentine",
    ],
  },
  plugins: [require("daisyui")],
}
