/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // You can add your custom font configuration here as per the guide
      fontFamily: {
        sans: ['YourCustomFont', 'sans-serif'],
      },
      fontWeight: {
        light: '300',
        medium: '500',
        demibold: '600',
        bold: '700',
      }
    },
  },
  plugins: [],
};
