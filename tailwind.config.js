/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "my-gold": "#ba9545",
        "my-cream": "#f1ede8",
        "my-blue": "#332089",
        "my-text-gray": "#7a7a7a",
      },
    },
  },
  plugins: [],
};
