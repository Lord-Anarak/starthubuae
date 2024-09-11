/** @type {import('tailwindcss').Config} */
module.exports = {
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
        "hero-image": "url('/hero.jpg')",
      },
      fontSize: {
        title: "calc(clamp(3.5em, 6vw, 3.5em) * 1.25)",
        sub: "calc(clamp(2em, 4vw, 2em) * 1.25)",
        base: "calc(clamp(1em, 2vw, 1em) * 1)",
        h4: "calc(clamp(3.25em, 7vw, 8em) * .75)",
      },
      colors: {
        primary: "#45bbff",
      },
      animation: {
        "spin-slow": "spin 15s linear infinite",
      },
      padding: {
        container: "clamp(2.5em, 8vw, 8em)",
        section: "clamp(5em, 21vh, 12em)",
      },
    },
    plugins: [],
  },
};
