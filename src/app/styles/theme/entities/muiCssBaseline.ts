import SFProTextTTF from '@/shared/assets/fonts/SFProText-Regular.ttf';

export const muiCssBaseline = {
  styleOverrides: {
    body: {
      backgroundColor: 'var(--bg)',
    },

    '@font-face': {
      fontFamily: 'SFProText',
      src: `url(${SFProTextTTF})`,
    },
  },
};
