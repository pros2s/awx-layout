export const muiTab = {
  defaultProps: {
    disableRipple: true,
  },

  styleOverrides: {
    root: {
      textTransform: 'none',
      background: '#fff',
      color: '#000',

      minHeight: 'fit-content',
      height: 'fit-content',
      minWidth: 'fit-content',

      '&.Mui-selected': {
        color: '#fff',
        backgroundColor: '#000',
      },
    },
  },
};
