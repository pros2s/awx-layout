import { QuantityInput } from '@/features/QuantityInput';
import { Stack, Typography } from '@mui/material';

import { quantitiesData } from './config/quantitiesData';
const { eth, rub } = quantitiesData;

import cls from './Volumes.module.css';

interface VolumesPropsType {
  title?: string;
}

export const Volumes = ({ title = 'Объемы' }: VolumesPropsType) => {
  return (
    <Stack spacing={2} component="section" sx={{ mt: 2.5 }}>
      <Typography variant="h3" component="h3">
        {title}
      </Typography>

      <Stack spacing={1.5} direction="row" flexWrap="wrap">
        <QuantityInput className={cls.input} title={eth.title} label={eth.label} defaultValue={eth.value} />
        <QuantityInput
          className={cls.input}
          title={rub.title}
          label={rub.label}
          defaultValue={rub.value}
          titleAlign="right"
        />
      </Stack>
    </Stack>
  );
};
