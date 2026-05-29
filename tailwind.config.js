export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#1F5A38',
        moss: '#3C7A4A',
        earth: '#8B5E3C',
        sand: '#F3EBDD',
        cream: '#FBF8F1',
        ink: '#1E2A22',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        soft: '0 18px 45px rgba(31, 90, 56, 0.10)',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top left, rgba(111, 168, 120, 0.22), transparent 35%), radial-gradient(circle at bottom right, rgba(139, 94, 60, 0.14), transparent 32%)',
      },
    },
  },
  plugins: [],
}
