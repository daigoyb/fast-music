/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'transparent': 'transparent',
      'white': '#ffffff',
      'black': '#000000',
      'primary_900': '#050912',
      'primary_700': '#0A1531',
      'primary_500': '#0B1F44',
      'primary_300': '#4286F4',
      'secondary_900': '#0B0F09',
      'secondary_700': '#1E3113',
      'secondary_500': '#203C0A',
      'secondary_300': '#237A21',
      'gray_700': '#1E1E20',
      'gray_500': '#666876'
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [],
}
