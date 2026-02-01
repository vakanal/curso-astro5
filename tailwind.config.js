import daisyui from "daisyui";
import typography from "@tailwindcss/typography";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  plugins: [typography, daisyui],
  daisyui: {
    themes: ["light", "dark"],
    logs: false,
  },
};
