import { ChangeEvent, useState } from 'react';

import { FormControlLabel, IconButton, Radio, RadioGroup, Stack } from '@mui/material';

import EditIcon from '@/shared/assets/icons/edit-info.svg?react';

import cls from './EditableInfo.module.css';

interface InfoVariantType {
  id: string;
  label: string;
}

export interface EditableInfoPropsType {
  label: string;
  variants?: InfoVariantType[];
}

export const EditableInfo = ({ label, variants }: EditableInfoPropsType) => {
  const [value, setValue] = useState(variants?.[0].label);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <Stack className={cls.card} spacing={2}>
      {!!variants && (
        <RadioGroup
          className={cls.group}
          aria-labelledby={`${label}-radio-buttons-group`}
          name={`${label}-radio-buttons-group`}
          value={value}
          onChange={handleChange}
          row
          sx={{
            justifyContent: {
              xs: 'space-around',
            },
          }}
        >
          {variants.map(({ id, label }) => (
            <FormControlLabel key={id} value={label} label={label} control={<Radio />} />
          ))}
        </RadioGroup>
      )}

      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <p className={cls.label}>{label}</p>

        <IconButton className={cls.edit} aria-label="редактировать" size="small">
          <EditIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};
