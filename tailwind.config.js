module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: true,
    content: ["./**/*.html", "./*.html", "*.html"],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
