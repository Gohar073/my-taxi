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
        // BOLD YELLOW TAXI THEME - Primary Yellow/Gold
        taxi: {
          50: '#FFFEF5',
          100: '#FFFBE0',
          200: '#FFF7C2',
          300: '#FFEF8A',
          400: '#FFE455',
          500: '#FFD700', // Taxi Yellow - Main
          600: '#F5A623', // Deep Gold
          700: '#CC8800',
          800: '#A66F00',
          900: '#7A5200',
          950: '#4A3100',
        },
        // Secondary - Rich Black for contrast
        night: {
          50: '#F7F7F7',
          100: '#E3E3E3',
          200: '#C8C8C8',
          300: '#A4A4A4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#1A1A1A', // Deep night
          950: '#0D0D0D',
        },
        // Accent - Warm amber tones
        amber: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        // Surface colors - Yellow tinted backgrounds
        surface: {
          light: '#FFFEF8',      // Lightest - main bg
          cream: '#FFF9E6',      // Warm cream
          gold: '#FFF3CC',       // Light gold
          muted: '#FFF0B3',      // Muted yellow
          accent: '#FFE680',     // Accent yellow
        },
        // Text colors
        text: {
          primary: '#1A1A1A',
          secondary: '#4A4A4A',
          muted: '#6B6B6B',
          light: '#9A9A9A',
          inverse: '#FFFFFF',
        },
        // Semantic colors
        success: '#22C55E',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6',
      },
      backgroundImage: {
        // Bold Yellow Gradients
        'gradient-taxi': 'linear-gradient(135deg, #FFD700 0%, #F5A623 50%, #CC8800 100%)',
        'gradient-taxi-soft': 'linear-gradient(135deg, #FFFBE0 0%, #FFF7C2 50%, #FFEF8A 100%)',
        'gradient-taxi-vibrant': 'linear-gradient(135deg, #FFE455 0%, #FFD700 50%, #F5A623 100%)',
        'gradient-gold': 'linear-gradient(135deg, #F5A623 0%, #CC8800 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #FFD700 0%, #FF8C00 50%, #FF6B00 100%)',
        // Hero backgrounds
        'gradient-hero': 'linear-gradient(180deg, #FFD700 0%, #FFF3CC 30%, #FFFEF8 100%)',
        'gradient-hero-radial': 'radial-gradient(ellipse 120% 80% at 50% 0%, #FFD700 0%, #FFF7C2 40%, #FFFEF8 70%)',
        'gradient-hero-bold': 'linear-gradient(135deg, #FFD700 0%, #FFE455 25%, #FFF3CC 50%, #FFFEF8 100%)',
        // Section backgrounds
        'gradient-section': 'linear-gradient(180deg, #FFFEF8 0%, #FFF9E6 50%, #FFF3CC 100%)',
        'gradient-section-alt': 'linear-gradient(180deg, #FFF3CC 0%, #FFFEF8 100%)',
        // Dark sections
        'gradient-dark': 'linear-gradient(135deg, #1A1A1A 0%, #2A2A2A 50%, #1A1A1A 100%)',
        'gradient-dark-gold': 'linear-gradient(135deg, #1A1A1A 0%, #2A2200 50%, #1A1A1A 100%)',
        // Card backgrounds
        'gradient-card': 'linear-gradient(145deg, #FFFFFF 0%, #FFFEF8 50%, #FFF9E6 100%)',
        'gradient-card-gold': 'linear-gradient(145deg, #FFF9E6 0%, #FFF3CC 100%)',
        // Glow effects
        'gradient-glow': 'radial-gradient(circle at center, rgba(255, 215, 0, 0.4) 0%, transparent 70%)',
        'gradient-glow-soft': 'radial-gradient(circle at center, rgba(255, 215, 0, 0.2) 0%, transparent 60%)',
        // Noise texture
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'soft': '0 2px 8px -2px rgba(26, 26, 26, 0.08)',
        'medium': '0 4px 16px -4px rgba(26, 26, 26, 0.12)',
        'large': '0 8px 32px -8px rgba(26, 26, 26, 0.16)',
        'xl': '0 16px 48px -12px rgba(26, 26, 26, 0.2)',
        // Golden shadows
        'glow-yellow': '0 0 40px -10px rgba(255, 215, 0, 0.5)',
        'glow-yellow-strong': '0 0 60px -10px rgba(255, 215, 0, 0.6), 0 0 100px -20px rgba(255, 215, 0, 0.4)',
        'glow-gold': '0 0 40px -10px rgba(245, 166, 35, 0.5)',
        'glow-gold-strong': '0 0 60px -10px rgba(245, 166, 35, 0.6)',
        // Button shadows
        'button': '0 2px 8px -2px rgba(255, 215, 0, 0.4), 0 4px 16px -4px rgba(245, 166, 35, 0.3)',
        'button-hover': '0 4px 20px -4px rgba(255, 215, 0, 0.5), 0 8px 32px -8px rgba(245, 166, 35, 0.4)',
        // Card shadows
        'card': '0 1px 3px rgba(26, 26, 26, 0.04), 0 6px 16px -6px rgba(26, 26, 26, 0.08)',
        'card-hover': '0 8px 32px -8px rgba(26, 26, 26, 0.12), 0 0 40px -10px rgba(255, 215, 0, 0.2)',
        // Inner shadows
        'inner-soft': 'inset 0 2px 4px -2px rgba(26, 26, 26, 0.06)',
        'inner-gold': 'inset 0 2px 4px -2px rgba(255, 215, 0, 0.2)',
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
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
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
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 40px -10px rgba(255, 215, 0, 0.5)' },
          '50%': { boxShadow: '0 0 60px -10px rgba(255, 215, 0, 0.7)' },
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
