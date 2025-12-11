import { createTheme } from '@mui/material';

import { typography } from './entities/typography';
import { muiCssBaseline } from './entities/muiCssBaseline';
import { muiTabs } from './entities/muiTabs';
import { muiTab } from './entities/muiTab';
import { muiStack } from './entities/muiStack';
import { muiInput } from './entities/muiInput';
import { muiIconButton } from './entities/muiIconButton';
import { Theme } from '@mui/material/styles';

type BreakpointValueType = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const theme = createTheme({
  typography,

  breakpoints: {
    values: {
      xxs: 0,
      xs: 484,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    } as Record<BreakpointValueType, number>,
  },

  components: {
    MuiCssBaseline: muiCssBaseline,
    MuiStack: muiStack,
    MuiTabs: muiTabs,
    MuiTab: muiTab,
    MuiInput: muiInput,
    MuiIconButton: muiIconButton,
  },
});
