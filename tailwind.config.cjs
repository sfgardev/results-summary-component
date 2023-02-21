/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "hanken-grotesk": ["Hanken Grotesk", "sans-serif"],
      },
      colors: {
        "clr-light-red": "hsl(var(--clr-light-red),<alpha-value>)",
        "clr-orange-yellow": "hsl(var(--clr-orange-yellow),<alpha-value>)",
        "clr-green-teal": "hsl(var(--clr-green-teal),<alpha-value>)",
        "clr-cobalt-blue": "hsl(var(--clr-cobalt-blue),<alpha-value>)",

        "clr-slate-blue": "hsl(var(--clr-slate-blue),<alpha-value>)",
        "clr-royal-blue": "hsl(var(--clr-royal-blue),<alpha-value>)",
        "clr-violet-blue": "hsl(var(--clr-violet-blue),<alpha-value>)",
        "clr-persian-blue": "hsl(var(--clr-persian-blue),<alpha-value>)",

        "clr-white": "hsl(var(--clr-white),<alpha-value>)",
        "clr-pale-blue": "hsl(var(--clr-pale-blue),<alpha-value>)",
        "clr-light-lavender": "hsl(var(--clr-light-lavender),<alpha-value>)",
        "clr-dark-gray-blue": "hsl(var(--clr-dark-gray-blue),<alpha-value>)",
      },
    },
  },
  plugins: [],
};
