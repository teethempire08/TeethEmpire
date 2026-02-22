import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A365D',
          light: '#2D4A7C',
          dark: '#0F2744',
        },
        secondary: {
          DEFAULT: '#E6F2FF',
          light: '#F0F7FF',
          dark: '#D1E7FF',
        },
        accent: {
          DEFAULT: '#25D366',
          light: '#3FE07B',
          dark: '#1DA851',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        card: '16px',
        button: '24px',
      },
    },
  },
  plugins: [],
} satisfies Config;
