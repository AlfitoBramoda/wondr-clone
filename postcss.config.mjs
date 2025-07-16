/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // BEFORE: tailwindcss: {},
    '@tailwindcss/postcss': {}, // AFTER: Use the new package
    autoprefixer: {},
  },
};

export default config;