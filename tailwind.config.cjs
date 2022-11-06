/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: ({ colors }) => ({
        background: colors.zinc[900],
        onBackground: colors.zinc[300],
        surface: colors.zinc[800],
        onSurface: colors.zinc[300],
        success: colors.emerald[400],
        error: colors.rose[400],
      }),
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
