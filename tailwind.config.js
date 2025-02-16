export default {
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: '480px', // @media (min-width: 480px) { ... }
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
    },
    extend: {
      colors: {
        customColor: {
          100: '#49e659',
          900: '#434252',
        },
      },
      fontSize: {
        base: '18px',
      },
      spacing: {
        8: '80px',
      },
      height: {
        10: '100px',
      },
      width: {
        50: '500px',
      },
    },
  },
}
