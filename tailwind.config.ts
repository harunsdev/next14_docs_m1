import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        // blue: {
        //   400: '#2589FE',
        //   500: '#0070F3',
        //   600: '#2F6FEB',
        // },

        orange: {
          200: '#dd571c', //Fire
          300: '#893101', //Amber
          400: '#be5504', //Ginger
          500: '#ed7014', //Bronze
          600: '#b2560d', //Customized
          1000: '#FF4F00', //International
        },
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },

  plugins: [require('@tailwindcss/forms')],
};
export default config;
