/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {}
  },
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },

  plugins: [require("daisyui")]
};

module.exports = config;