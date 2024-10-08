import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        forground: 'var(--text)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        hover: 'var(--base)',
        card: 'var(--card)',
        accent: 'var(--accent)',
        muted: 'var(--muted)'
      },
    },
  },
  plugins: [],
}

export default config