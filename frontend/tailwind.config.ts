import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#005098",
        "secondary-container": "#f26522",
        tertiary: "#133a66"
      }
    }
  },
  plugins: [],
};
export default config;