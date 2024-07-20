/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "darkblue": "#49557e",
      "tomato": "tomato",
      "white-50": "#e2e2e2",
      "white-100": "#fff4f2",
      "white-200": "#d9d9d9",
      "white-300": "#eaeaea",
      "gray-50": "#808080",
      "gray-100": "#747474",
      "gray-200": "#262626",
      "gray-300": "#676767",
      "gray-400": "#323232",
      "gray-500": "#c9c9c9",
      "gray-600": "#c5c5c5",
      "black-rgba-100": "#00000090",
      "transparent":"transparent",
    },
    animation: {
      'fade-in': "fadeIn 1s linear",
      'fade-out': "fadeIn 1s linear",
      'fade-in-short': "fadeIn 500ms linear"
    },
    extend: {},
  },
  plugins: [],
};
