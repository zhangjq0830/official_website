import type { Config } from 'tailwindcss';

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './composables/**/*.{js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#334155',
        secondary: '#1e293b',
        't-primary': '#333333',
        't-secondary': '#666666'
      }
    }
  },
  plugins: []
} satisfies Config;
