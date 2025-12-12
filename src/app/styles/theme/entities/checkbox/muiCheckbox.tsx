import { BpIcon, BpCheckedIcon } from './CustomCheckbox';

export const muiCheckbox = {
  defaultProps: {
    disableRipple: true,
    icon: <BpIcon />,
    checkedIcon: <BpCheckedIcon />,
  },

  styleOverrides: {
    root: {
      padding: 0,
      marginRight: 0,
    },
  },
};
