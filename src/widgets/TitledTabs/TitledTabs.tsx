import { Stack, Typography } from '@mui/material';

import { MyTabs } from '@/shared/ui/MyTabs';

import { tabs } from './config/tabs';
import cls from './TitledTabs.module.css';

interface TitledTabsPropsType {
  title?: string;
}

export const TitledTabs = ({ title = 'Способ вывода' }: TitledTabsPropsType) => {
  return (
    <Stack spacing={2} component="section" sx={{ mt: 2.5 }}>
      <Typography variant="h3" component="h3">
        {title}
      </Typography>

      <MyTabs className={cls.tabs} tabClassName={cls.tab} items={tabs} gap={1} />
    </Stack>
  );
};
