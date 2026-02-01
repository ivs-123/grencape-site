/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        cosmos: '#FAFAF7',
        grencape: '#1F5F3A'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(10, 20, 15, 0.08)'
      },
      letterSpacing: {
        hero: '0.08em'
      }
    }
  },
  plugins: []
}
