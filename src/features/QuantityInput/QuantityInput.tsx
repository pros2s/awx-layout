import { ChangeEvent } from 'react';
import { Stack, IconButton, Typography, TextField } from '@mui/material';

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

import cls from './QuantityInput.module.css';

interface QuantityInputPropsType {
  title: string;
  label: string;
  onChange: (num: number) => void;
  onRemove: (num: number) => void;
  onAdd: (num: number) => void;
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
  const round = String(step).split('.')[1]?.length;

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const value = Number(e.target.value);

    if (!Number.isNaN(value) && value <= max && value >= min) {
      onChange(value);
    }
  };

  const handleRemove = () => {
    if (value >= min + step) {
      onRemove(Number((value - step).toFixed(round)));
    }
  };

  const handleAdd = () => {
    if (value <= max - step) {
      onAdd(Number((value + step).toFixed(round)));
    }
  };

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
          <IconButton className={cls.button} aria-label="уменьшить" size="small" onClick={handleRemove}>
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

          <IconButton className={cls.button} aria-label="увеличить" size="small" onClick={handleAdd}>
            <AddIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
};
