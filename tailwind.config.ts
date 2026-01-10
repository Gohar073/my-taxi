import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.02em' }],
        'sm': ['0.875rem', { lineHeight: '1.4rem', letterSpacing: '0.01em' }],
        'base': ['1rem', { lineHeight: '1.6rem', letterSpacing: '0em' }],
        'lg': ['1.125rem', { lineHeight: '1.7rem', letterSpacing: '-0.01em' }],
        'xl': ['1.25rem', { lineHeight: '1.8rem', letterSpacing: '-0.015em' }],
        '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.02em' }],
        '3xl': ['2rem', { lineHeight: '2.4rem', letterSpacing: '-0.025em' }],
        '4xl': ['2.5rem', { lineHeight: '3rem', letterSpacing: '-0.03em' }],
        '5xl': ['3.5rem', { lineHeight: '1.15', letterSpacing: '-0.035em' }],
        '6xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.04em' }],
        '7xl': ['5.5rem', { lineHeight: '1.05', letterSpacing: '-0.045em' }],
        '8xl': ['7rem', { lineHeight: '1', letterSpacing: '-0.05em' }],
      },
      colors: {
        // Primary brand palette - Warm & Inviting
        brand: {
          50: '#FFFBF5',
          100: '#FFF5E6',
          200: '#FFE8C7',
          300: '#FFD699',
          400: '#FFC266',
          500: '#F5A623', // Primary amber/honey
          600: '#E09000',
          700: '#B87300',
          800: '#8A5600',
          900: '#5C3A00',
        },
        // Accent - Sage green for sophistication
        sage: {
          50: '#F6F9F7',
          100: '#E8F0EB',
          200: '#D1E1D7',
          300: '#A8C7B5',
          400: '#7EAD93',
          500: '#5D9478',
          600: '#4A7A61',
          700: '#3D6350',
          800: '#334F42',
          900: '#2A4137',
        },
        // Neutral - Warm espresso tones
        espresso: {
          50: '#FDFCFB',
          100: '#F9F7F5',
          200: '#F3F0ED',
          300: '#E8E3DE',
          400: '#D4CCC3',
          500: '#9C8F82',
          600: '#756959',
          700: '#5A4F42',
          800: '#3D352C',
          900: '#252019',
          950: '#1A1612',
        },
        // Background palette - Warm ivory/cream
        surface: {
          primary: '#FFFDF9',    // Main background
          secondary: '#FDF9F3',  // Cards, elevated
          tertiary: '#F9F5EE',   // Inputs, deeper sections
          elevated: '#FFFFFF',   // Popovers, modals
          inverse: '#252019',    // Dark sections
        },
        // Semantic colors
        success: '#22C55E',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6',
      },
      backgroundImage: {
        // Subtle gradients
        'gradient-warm': 'linear-gradient(135deg, #FFFDF9 0%, #FDF9F3 50%, #F9F5EE 100%)',
        'gradient-amber': 'linear-gradient(135deg, #FFC266 0%, #F5A623 50%, #E09000 100%)',
        'gradient-amber-soft': 'linear-gradient(135deg, #FFF5E6 0%, #FFE8C7 100%)',
        'gradient-sage': 'linear-gradient(135deg, #7EAD93 0%, #5D9478 100%)',
        'gradient-hero': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(245, 166, 35, 0.15) 0%, transparent 60%)',
        'gradient-hero-bottom': 'linear-gradient(to top, rgba(253, 249, 243, 1) 0%, transparent 100%)',
        'gradient-card': 'linear-gradient(145deg, #FFFFFF 0%, #FDFCFB 100%)',
        'gradient-section': 'linear-gradient(180deg, #FFFDF9 0%, #F9F5EE 100%)',
        'gradient-dark': 'linear-gradient(135deg, #252019 0%, #1A1612 100%)',
        'gradient-glow': 'radial-gradient(circle at center, rgba(245, 166, 35, 0.2) 0%, transparent 60%)',
        // Noise texture
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'soft': '0 2px 8px -2px rgba(37, 32, 25, 0.08), 0 4px 16px -4px rgba(37, 32, 25, 0.04)',
        'medium': '0 4px 16px -4px rgba(37, 32, 25, 0.1), 0 8px 32px -8px rgba(37, 32, 25, 0.06)',
        'large': '0 8px 32px -8px rgba(37, 32, 25, 0.12), 0 16px 48px -16px rgba(37, 32, 25, 0.08)',
        'xl': '0 16px 48px -12px rgba(37, 32, 25, 0.15), 0 32px 64px -24px rgba(37, 32, 25, 0.1)',
        'glow-amber': '0 0 40px -10px rgba(245, 166, 35, 0.4)',
        'glow-amber-strong': '0 0 60px -10px rgba(245, 166, 35, 0.5), 0 0 100px -20px rgba(245, 166, 35, 0.3)',
        'inner-soft': 'inset 0 2px 4px -2px rgba(37, 32, 25, 0.06)',
        'button': '0 1px 2px rgba(37, 32, 25, 0.08), 0 4px 12px -4px rgba(245, 166, 35, 0.3)',
        'button-hover': '0 4px 16px -4px rgba(245, 166, 35, 0.4), 0 8px 24px -8px rgba(245, 166, 35, 0.25)',
        'card': '0 1px 3px rgba(37, 32, 25, 0.04), 0 6px 16px -6px rgba(37, 32, 25, 0.08)',
        'card-hover': '0 8px 32px -8px rgba(37, 32, 25, 0.12), 0 20px 48px -20px rgba(37, 32, 25, 0.08)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-down': 'fadeDown 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        'scale-in': 'scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-left': 'slideLeft 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-right': 'slideRight 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [typography],
} satisfies Config;
