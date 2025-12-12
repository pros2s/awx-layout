export const muiTab = {
  styleOverrides: {
    root: {
      textTransform: 'none',
      background: 'var(--bg-primary)',
      color: 'var(--color-primary)',

      minHeight: 'fit-content',
      height: 'fit-content',
      minWidth: 'fit-content',

      '&.Mui-selected': {
        backgroundColor: 'var(--bg-secondary)',
        color: 'var(--color-secondary)',
      },
    },
  },
};
