import { useState } from 'react';

import { Stack, Typography } from '@mui/material';

import { QuantityInput } from '@/features/QuantityInput';

import { useInitVolumesData } from './hooks/data/useInitVolumesData';
import { useVolumesLeft } from './hooks/useVolumesLeft';
import { useVolumesRight } from './hooks/useVolumesRight';

import { quantitiesData } from './config/quantitiesData';
const { eth, rub } = quantitiesData;

import cls from './Volumes.module.css';

interface VolumesPropsType {
  title?: string;
}

export const Volumes = ({ title = 'Объемы' }: VolumesPropsType) => {
  const [leftValue, setLeftValue] = useState(quantitiesData.eth.min);
  const [rightValue, setRightValue] = useState(0);

  const { isInitLoading, minmaxRight } = useInitVolumesData(setRightValue);

  const { handleLeftChange, isRightLoading } = useVolumesLeft(setLeftValue, setRightValue);
  const { handleRightChange, isLeftLoading } = useVolumesRight(setRightValue, setLeftValue);

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
          step={eth.step}
          min={eth.min}
          max={eth.max}
          value={leftValue}
          onRemove={handleLeftChange}
          onAdd={handleLeftChange}
          onChange={handleLeftChange}
          isLoading={isLeftLoading}
        />

        <QuantityInput
          className={cls.input}
          title={rub.title}
          label={rub.label}
          step={rub.step}
          min={minmaxRight[0]}
          max={minmaxRight[1]}
          value={rightValue}
          onRemove={handleRightChange}
          onAdd={handleRightChange}
          onChange={handleRightChange}
          titleAlign="right"
          isLoading={isInitLoading || isRightLoading}
        />
      </Stack>
    </Stack>
  );
};
