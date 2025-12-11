import { Stack, IconButton, Box, Input, Typography } from '@mui/material';

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

import cls from './QuantityInput.module.css';

interface QuantityInputPropsType {
  title: string;
  label: string;
  defaultValue: string;
  titleAlign?: 'left' | 'right';
  className?: string;
}

export const QuantityInput = ({
  defaultValue,
  label,
  title,
  titleAlign = 'left',
  className,
}: QuantityInputPropsType) => {
  return (
    <Stack className={className} spacing={1}>
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
          <IconButton className={cls.button} aria-label="уменьшить" size="small">
            <RemoveIcon fontSize="small" />
          </IconButton>

          <Input className={cls.input} value={defaultValue} name="give-lot" size="small" />

          <IconButton className={cls.button} aria-label="увеличить" size="small">
            <AddIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
};
