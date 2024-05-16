import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      cursor: {
        customDefault: 'url(/cursor-default.png) 5 2, auto',
        customClick: 'url(/cursor-click.png) 5 2, auto',
        customHover: 'url(/cursor-hover.png) 5 2, auto',
        customHoverClick: 'url(/cursor-hover-click.png) 5 2, auto',
        customClickRight: 'url(/cursor-click-right.png) 5 2, auto',
      },
    },
  },
  plugins: [],
};
export default config;
