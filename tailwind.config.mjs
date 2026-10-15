import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        bg: {
          light: '#fafafa',
          dark: '#0a0a0a',
        },
        fg: {
          light: '#171717',
          dark: '#ededed',
        },
        muted: {
          light: '#737373',
          dark: '#a1a1a1',
        },
        accent: {
          DEFAULT: '#2563eb',
          dark: '#60a5fa',
        },
        border: {
          light: '#e5e5e5',
          dark: '#262626',
        },
      },
      fontFamily: {
        heading: [
          '"Libre Caslon Condensed"',
          'Georgia',
          'serif',
        ],
        sans: [
          '"DM Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
        mono: [
          '"DM Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      fontSize: {
        base: ['0.8rem', { lineHeight: '1.65', letterSpacing: '-0.02em' }],
        sm: ['0.8rem', { lineHeight: '1.6', letterSpacing: '-0.02em' }],
        xs: ['0.7rem', { lineHeight: '1.5', letterSpacing: '-0.02em' }],
      },
    },
  },
  plugins: [typography],
};
