/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        background: colors.zinc[300],
        onBackground: colors.zinc[900],
        success: colors.emerald[400],
        onSuccess: colors.emerald[900],
        error: colors.rose[400],
        onError: colors.rose[900],
      }),
    },
  },
  plugins: [],
};
