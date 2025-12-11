import { Stack, Typography } from '@mui/material';

import { MyTabs } from '@/shared/ui/MyTabs';

import { tabs } from './config/tabs';
import cls from './OutputVariants.module.css';

interface OutputVariantsPropsType {
  title?: string;
}

export const OutputVariants = ({ title = 'Способ вывода' }: OutputVariantsPropsType) => {
  return (
    <Stack direction="column" gap={2}>
      <Typography variant="h3" component="h3">
        {title}
      </Typography>

      <MyTabs className={cls.tabs} tabClassName={cls.tab} items={tabs} gap={1} />
    </Stack>
  );
};
