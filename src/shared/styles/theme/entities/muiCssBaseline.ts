import SFProTextTTF from '@/shared/assets/fonts/SFProText-Regular.ttf';

export const muiCssBaseline = {
  styleOverrides: {
    body: {
      backgroundColor: '#ededed',
      padding: '20px 0',
    },

    '@font-face': {
      fontFamily: 'SFProText',
      src: `url(${SFProTextTTF})`,
    },
  },
};
