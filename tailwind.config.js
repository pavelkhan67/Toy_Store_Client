/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#baffa3",

          "secondary": "#ddbffc",

          "accent": "#fc3a67",

          "neutral": "#2C232F",

          "base-100": "#EFEEF1",

          "info": "#77CDF8",

          "success": "#208877",

          "warning": "#F4C415",

          "error": "#DC3D38",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

