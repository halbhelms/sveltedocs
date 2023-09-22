/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '500',
      bold: '600',
      extrabold: '800',
      'extra-bold': '800',
      black: '900',
    },
    extend: {
      gridTemplateColumns: {
        'header': '1fr, 2fr'
      }
    }
  },
  plugins: []
};