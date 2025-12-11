import { createTheme } from '@mui/material';

import { typography } from './entities/typography';
import { muiCssBaseline } from './entities/muiCssBaseline';
import { muiTabs } from './entities/muiTabs';
import { muiTab } from './entities/muiTab';

export const theme = createTheme({
  typography,

  components: {
    MuiCssBaseline: muiCssBaseline,
    MuiTabs: muiTabs,
    MuiTab: muiTab,
  },
});
