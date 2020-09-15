module.exports = {
  purge: ["./components/*.tsx", "./pages/*.tsx"],
  theme: {
    extend: {},
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
