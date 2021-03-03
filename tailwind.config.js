module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      transitionProperty: {
        max: "max-height",
      },
      maxHeight: {
        2000: "2000px",
      },
    },
    fontFamily: {
      serif: "Butler",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
