import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.05em' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.025em' }],
        'base': ['1rem', { lineHeight: '1.5rem', letterSpacing: '0em' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '-0.01em' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.02em' }],
        '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.025em' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.03em' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.035em' }],
        '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.04em' }],
        '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.045em' }],
        '7xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.05em' }],
      },
      colors: {
        taxi: {
          // Primary brand colors - Premium & Professional
          primary: '#06090F', // Deepest navy (almost black)
          secondary: '#FFD700', // Premium gold (#FFD700)
          accent: '#00E5FF', // Electric cyan
          'accent-dark': '#00B8CC', // Deeper cyan
          
          // Rich dark palette with perfect contrast
          dark: '#0F1621', // Deep slate
          'dark-light': '#1A2332', // Medium slate
          'dark-lighter': '#252F3F', // Lighter slate
          
          // Premium neutral palette
          gray: '#64748B', // Slate-500
          'gray-light': '#94A3B8', // Slate-400
          'gray-lighter': '#CBD5E1', // Slate-300
          'gray-lightest': '#F1F5F9', // Slate-100
          
          // Sophisticated background system
          background: '#0A0E14', // Deepest background
          'background-light': '#0F1419', // Lighter background
          'background-lighter': '#1A1F29', // Even lighter
          surface: '#1A2332', // Base surface
          'surface-light': '#252F3F', // Light surface
          'surface-elevated': '#2D3848', // Elevated surface
          'surface-bright': '#FFFFFF', // Bright white for contrast
          
          // Semantic colors with perfect visibility
          success: '#10B981', // Emerald-500
          warning: '#F59E0B', // Amber-500
          error: '#EF4444', // Red-500
          info: '#3B82F6', // Blue-500
          
          // Legacy support
          yellow: '#FFD700',
          black: '#06090F',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #06090F 0%, #0F1621 50%, #0A0E14 100%)',
        'gradient-accent': 'linear-gradient(135deg, #00E5FF 0%, #00B8CC 100%)',
        'gradient-warm': 'linear-gradient(135deg, #FFD700 0%, #FFC700 100%)',
        'gradient-gold': 'linear-gradient(135deg, #FFED4E 0%, #FFD700 50%, #FFC700 100%)',
        'gradient-surface': 'linear-gradient(to bottom, #0A0E14 0%, #0F1419 30%, #1A1F29 100%)',
        'gradient-hero': 'linear-gradient(135deg, #0F1419 0%, #1A2332 50%, #252F3F 100%)',
        'gradient-card': 'linear-gradient(145deg, rgba(26, 35, 50, 0.8) 0%, rgba(37, 47, 63, 0.9) 100%)',
        'gradient-card-hover': 'linear-gradient(145deg, rgba(37, 47, 63, 0.95) 0%, rgba(45, 56, 72, 1) 100%)',
        'gradient-dark': 'linear-gradient(to bottom, #06090F 0%, #0A0E14 100%)',
        'gradient-glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
        'gradient-glow': 'radial-gradient(circle at center, rgba(255, 215, 0, 0.15) 0%, transparent 70%)',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'medium': '0 4px 16px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.08)',
        'large': '0 8px 32px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.1)',
        'xl': '0 12px 48px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.12)',
        'glow-primary': '0 0 40px rgba(6, 9, 15, 0.9), 0 0 80px rgba(6, 9, 15, 0.6)',
        'glow-accent': '0 0 30px rgba(0, 229, 255, 0.6), 0 0 60px rgba(0, 229, 255, 0.3)',
        'glow-gold': '0 0 40px rgba(255, 215, 0, 0.5), 0 0 80px rgba(255, 215, 0, 0.25)',
        'glow-gold-strong': '0 0 50px rgba(255, 215, 0, 0.7), 0 0 100px rgba(255, 215, 0, 0.4)',
        'inner-dark': 'inset 0 2px 4px rgba(0, 0, 0, 0.4), inset 0 -1px 0 rgba(255, 255, 255, 0.05)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      },
      backdropBlur: {
        xs: '2px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [typography],
} satisfies Config;

