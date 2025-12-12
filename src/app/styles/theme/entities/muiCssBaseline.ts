import SFProTextTTF from '@/shared/assets/fonts/SFProText-Regular.ttf';

export const muiCssBaseline = {
  styleOverrides: {
    body: {
      backgroundColor: 'var(--bg)',
    },

    p: {
      margin: '0',
    },

    '@font-face': {
      fontFamily: 'SFProText',
      src: `url(${SFProTextTTF})`,
    },
  },
};
