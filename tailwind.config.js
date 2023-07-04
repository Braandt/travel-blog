/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'sans': 'Tanker',
      'sans2': 'montserrat',
      'serif': 'Erode',
      'serif2': 'Bespoke Serif',
      'script': 'Dancing Script'
    },
    extend: {
      colors: {
        'black': '#0d0d0d',
        'white': '#fffffe',
        'pallete': {
          '1': '#eff0f3',
          '2': '#2a2a2a',
          '3': '#ff8e3c',
          '4': '#d9376e',
          '5': '#4B5013',
          '6': '#9EA737'
        },
      },
    }
  },
  plugins: [],
}
