import { Stack, IconButton, Input, Typography, TextField } from '@mui/material';

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

import cls from './QuantityInput.module.css';
import { ChangeEvent, useState } from 'react';
import { useQuantityChange } from '@/features/QuantityInput/hooks/useQuantityChange';

interface QuantityInputPropsType {
  title: string;
  label: string;
  onChange: (num: number) => void;
  onRemove: () => void;
  onAdd: () => void;
  value: number;
  min?: number;
  step?: number;
  max?: number;
  titleAlign?: 'left' | 'right';
  className?: string;
}

export const QuantityInput = ({
  label,
  title,
  value,
  titleAlign = 'left',
  min = 0,
  max = 100,
  step = 1,
  onChange,
  onAdd,
  onRemove,
  className,
}: QuantityInputPropsType) => {
  const handleChange = useQuantityChange({ onChange, max, min });

  return (
    <Stack
      className={className}
      spacing={1}
      sx={{
        maxWidth: {
          xxs: 'none',
          xs: '220px',
          sm: '212px',
        },
      }}
    >
      <Typography
        className={cls.title}
        sx={{
          textAlign: {
            xxs: 'left',
            xs: titleAlign === 'right' ? 'right' : 'left',
          },
        }}
      >
        {title}
      </Typography>

      <Stack className={cls.card} spacing={0.5}>
        <Typography className={cls.label} align="center">
          {label}
        </Typography>

        <Stack direction="row" alignItems="center" spacing={0.5}>
          <IconButton className={cls.button} aria-label="уменьшить" size="small" onClick={onRemove}>
            <RemoveIcon fontSize="small" />
          </IconButton>

          <TextField
            className={cls.input}
            value={value}
            slotProps={{ htmlInput: { min, max, step } }}
            onChange={(val) => handleChange(val)}
            name="give-lot"
            size="small"
            type="number"
          />

          <IconButton className={cls.button} aria-label="увеличить" size="small" onClick={onAdd}>
            <AddIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
};
