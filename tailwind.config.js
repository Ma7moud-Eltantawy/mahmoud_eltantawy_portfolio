/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tajawal: ['Tajawal', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        apple: {
          bg: '#FBFBFD',
          secondary: '#F5F5F7',
          text: '#1D1D1F',
          muted: '#6E6E73',
          blue: '#0071E3',
          purple: '#6E44FF',
          amber: '#FF6B00',
          emerald: '#10B981'
        }
      }
    },
  },
  plugins: [],
}
