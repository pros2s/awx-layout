import { BpIcon, BpCheckedIcon } from './CustomRadio';

export const muiRadio = {
  defaultProps: {
    icon: <BpIcon />,
    checkedIcon: <BpCheckedIcon />,
  },

  styleOverrides: {
    root: {
      padding: 0,
      paddingTop: 2,
      marginRight: 0,
    },
  },
};
