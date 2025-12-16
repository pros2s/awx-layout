import { QuantityInput } from '@/features/QuantityInput';
import { Stack, Typography } from '@mui/material';

import { useVolumesData } from './hooks/useVolumesData';
import { useVolumesLeft } from './hooks/useVolumesLeft';
import { useVolumesRight } from './hooks/useVolumesRight';

import { quantitiesData } from './config/quantitiesData';
const { eth, rub } = quantitiesData;

import cls from './Volumes.module.css';

interface VolumesPropsType {
  title?: string;
}

export const Volumes = ({ title = 'Объемы' }: VolumesPropsType) => {
  const { handleLeftAdd, handleLeftChange, handleLeftRemove, leftValue } = useVolumesLeft();
  const { handleRightAdd, handleRightChange, handleRightRemove, rightValue } = useVolumesRight({ max: 10, min: 0 });

  useVolumesData(rightValue);

  return (
    <Stack spacing={2} component="section" sx={{ mt: 2.5 }}>
      <Typography variant="h3" component="h3">
        {title}
      </Typography>

      <Stack spacing={1.5} direction="row" flexWrap="wrap">
        <QuantityInput
          className={cls.input}
          title={eth.title}
          label={eth.label}
          max={eth.max}
          min={eth.min}
          step={eth.step}
          onAdd={handleLeftAdd}
          onChange={handleLeftChange}
          onRemove={handleLeftRemove}
          value={leftValue}
        />

        <QuantityInput
          className={cls.input}
          title={rub.title}
          label={rub.label}
          step={rub.step}
          titleAlign="right"
          onAdd={handleRightAdd}
          onChange={handleRightChange}
          onRemove={handleRightRemove}
          value={rightValue}
        />
      </Stack>
    </Stack>
  );
};
