import plugin from 'tailwindcss'

/** @type {import('tailwindcss').Config} */
const config =  {
  content: ["./public/index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '20px' },
      screens: {  lg: '1440px' }
    },
    extend: {},
    
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('active', ['&:active', '&.router-link-active'])
    })
],
}

export default config
