/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'digipro': '#0F80AE'
      },
      backgroundImage: {
        'gradient-radial': 'at left top, #0F80AE, #004AAD' ,
      },
    },
  },
  plugins: [],
}
