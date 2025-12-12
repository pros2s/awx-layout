import { createTheme } from '@mui/material';

import { typography } from './entities/typography';
import { muiCssBaseline } from './entities/muiCssBaseline';
import { muiTabs } from './entities/muiTabs';
import { muiTab } from './entities/muiTab';
import { muiStack } from './entities/muiStack';
import { muiInput } from './entities/muiInput';
import { muiCheckbox } from './entities/checkbox/muiCheckbox';
import { muiFormControlLabel } from './entities/muiFormControlLabel';
import { muiRadio } from './entities/radio/muiRadio';
import { MuiButtonBase } from './entities/muiButtonBase';
import { breakpoints } from './entities/breakpoints';

export const theme = createTheme({
  typography,
  breakpoints,

  components: {
    MuiCssBaseline: muiCssBaseline,
    MuiStack: muiStack,
    MuiTabs: muiTabs,
    MuiTab: muiTab,
    MuiInput: muiInput,
    MuiCheckbox: muiCheckbox,
    MuiFormControlLabel: muiFormControlLabel,
    MuiRadio: muiRadio,
    MuiButtonBase: MuiButtonBase,
  },
});
