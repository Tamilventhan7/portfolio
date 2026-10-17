/** Tailwind build config. Run: npm run build */
module.exports = {
  content: ['./index.html', './404.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        pure: '#ffffff', surface: 'rgb(var(--bg) / <alpha-value>)', white: 'rgb(var(--ink) / <alpha-value>)',
        slate: { 200: 'rgb(var(--s2) / <alpha-value>)', 300: 'rgb(var(--s3) / <alpha-value>)', 400: 'rgb(var(--s4) / <alpha-value>)', 500: 'rgb(var(--s5) / <alpha-value>)', 600: 'rgb(var(--s6) / <alpha-value>)' },
        emerald: { 400: 'rgb(var(--em) / <alpha-value>)' }, indigo: { 400: 'rgb(var(--ind) / <alpha-value>)' },
        purple: { 300: 'rgb(var(--pur) / <alpha-value>)' }, red: { 400: 'rgb(var(--red) / <alpha-value>)' },
        brand: { dark: '#0B0B12', card: 'rgb(var(--card) / <alpha-value>)', violet: 'rgb(var(--vio) / <alpha-value>)', cyan: 'rgb(var(--cy) / <alpha-value>)', purpleAccent: '#7C3AED', subtext: '#94A3B8' }
      },
      fontFamily: { display: ['"Space Grotesk"', 'sans-serif'], body: ['"Inter"', 'sans-serif'], mono: ['"JetBrains Mono"', 'monospace'] }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/container-queries')]
};
