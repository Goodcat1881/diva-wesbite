/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          DEFAULT: '#EFC0C8',
          light:   '#FAF3F5',
          mid:     '#E0A8B8',
          deep:    '#CC8A9E',
        },
        blush:  '#F2DADE',
        cream: {
          DEFAULT: '#FDF8F5',
          warm:    '#FAF3EE',
        },
        warm: {
          dark:      '#2A1520',
          mid:       '#5C3D4A',
          muted:     '#9B7880',
          'muted-lt':'#C8ADB5',
        },
        yellow: {
          DEFAULT: '#F5C518',
          soft:    '#FEF3C0',
        },
        border: 'rgba(180,140,155,0.20)',
      },
      fontFamily: {
        display: ['Bebas Neue', 'Arial Black', 'sans-serif'],
        body:    ['Poppins', 'Helvetica Neue', 'sans-serif'],
        label:   ['Montserrat', 'Helvetica Neue', 'sans-serif'],
      },
      fontSize: {
        'display': ['80px', { lineHeight: '1.0', letterSpacing: '0.03em' }],
        'h1':      ['56px', { lineHeight: '1.1', letterSpacing: '0.01em' }],
        'h2':      ['40px', { lineHeight: '1.1' }],
        'h3':      ['28px', { lineHeight: '1.25' }],
        'h4':      ['22px', { lineHeight: '1.3' }],
      },
      boxShadow: {
        'card': '0 2px 16px rgba(42,21,32,0.07)',
        'soft': '0 4px 24px rgba(42,21,32,0.08)',
        'btn':  '0 4px 16px rgba(181,99,122,0.35)',
      },
      borderRadius: {
        'sm':   '12px',
        'md':   '20px',
        'lg':   '28px',
        'pill': '999px',
      },
      borderWidth: {
        DEFAULT: '1px',
        '1.5':   '1.5px',
        '2':     '2px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
}
