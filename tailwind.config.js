/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Consolas', 'Monaco', 'monospace'],
      },
      colors: {
        primary: {
          50: '#f0f4f9',
          100: '#d9e4f0',
          200: '#b3c9e1',
          300: '#8daed2',
          400: '#5682b3',
          500: '#1a365d', // Navy Blue
          600: '#162c4d',
          700: '#12223d',
          800: '#0e192e',
          900: '#0a0f1f',
        },
        secondary: {
          50: '#e8f3f8',
          100: '#d1e7f1',
          200: '#a3cfe3',
          300: '#75b7d5',
          400: '#479fc7',
          500: '#0f4c75', // Deep Teal
          600: '#0c3d5e',
          700: '#092e47',
          800: '#061f30',
          900: '#030f18',
        },
        accent: {
          50: '#faf6f0',
          100: '#f5ede1',
          200: '#ebdbc3',
          300: '#e1c9a5',
          400: '#d7b787',
          500: '#d4a574', // Warm Gold
          600: '#b88d5f',
          700: '#9c754a',
          800: '#805d35',
          900: '#644520',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      animation: {
        'fade-in': 'fadeIn 1.5s ease-in-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'pulse-slow': 'pulse 6s infinite',
        'neon-glow': 'neonGlow 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        neonGlow: {
          '0%, 100%': {
            textShadow: '0 0 7px #0073ff, 0 0 10px #0073ff, 0 0 21px #0073ff, 0 0 42px #8700ff',
          },
          '50%': {
            textShadow: '0 0 10px #0073ff, 0 0 20px #0073ff, 0 0 30px #0073ff, 0 0 40px #8700ff',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-neon': 'linear-gradient(135deg, #0073ff 0%, #8700ff 100%)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '24px',
        '2xl': '40px',
        '3xl': '64px',
      },
    },
  },
  plugins: [],
}
