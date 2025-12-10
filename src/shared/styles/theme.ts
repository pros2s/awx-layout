import { createTheme } from '@mui/material';

import SFProTextTTF from '@/shared/assets/fonts/SFProText-Regular.ttf';

export const theme = createTheme({
  typography: {
    fontFamily: 'SFProText',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'SFProText';
          font-style: normal;
          font-weight: 400;
          src: url(${SFProTextTTF});
        }}
      `,
    },
  },
});
