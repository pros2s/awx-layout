import { ChangeEvent, useState } from 'react';
import { FormControlLabel, IconButton, Radio, RadioGroup, Stack } from '@mui/material';

import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';

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
    <Stack className={cls.card} spacing={3}>
      {!!variants && (
        <RadioGroup
          aria-labelledby={`${label}-radio-buttons-group`}
          name={`${label}-radio-buttons-group`}
          value={value}
          onChange={handleChange}
          row
        >
          {variants.map(({ id, label }) => (
            <FormControlLabel key={id} value={label} label={label} control={<Radio />} />
          ))}
        </RadioGroup>
      )}

      <Stack direction="row" justifyContent="space-between">
        <p>{label}</p>

        <IconButton aria-label="редактировать" size="small">
          <BorderColorOutlinedIcon fontSize="small" />
        </IconButton>
      </Stack>
    </Stack>
  );
};
