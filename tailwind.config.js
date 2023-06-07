/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'sans': 'Tanker',
      'sans2': 'montserrat',
      'serif': 'erode'
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
        },
      },
    }
  },
  plugins: [],
}
