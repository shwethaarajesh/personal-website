import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'primary':'#000000',
        'primary-mid':'#e0f2fe',
        'primary-dark':'#e0f2fe'
      },

    screens: {
      '3xl': '2000px',
      'xs': '515px',
      'xsm': '480px',
    },
    },
  },
  plugins: [],
}
export default config
