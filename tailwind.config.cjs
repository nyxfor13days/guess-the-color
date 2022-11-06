/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        background: colors.zinc[300],
        onBackground: colors.zinc[900],
        success: colors.emerald[600],
        error: colors.rose[600],
      }),
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
