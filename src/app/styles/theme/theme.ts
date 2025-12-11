import { createTheme } from '@mui/material';

import { typography } from './entities/typography';
import { muiCssBaseline } from './entities/muiCssBaseline';
import { muiTabs } from './entities/muiTabs';
import { muiTab } from './entities/muiTab';
import { muiStack } from './entities/muiStack';

export const theme = createTheme({
  typography,

  components: {
    MuiCssBaseline: muiCssBaseline,
    MuiStack: muiStack,
    MuiTabs: muiTabs,
    MuiTab: muiTab,
  },
});
