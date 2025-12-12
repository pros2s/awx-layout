import { Checkbox, FormControlLabel, Stack, Typography } from '@mui/material';

import { EditableInfo } from '@/features/EditableInfo';

import { editableInfoData } from './config/editableInfoData';

import cls from './Requisites.module.css';

interface RequisitesPropsType {
  title?: string;
}

export const Requisites = ({ title = 'Реквизиты' }: RequisitesPropsType) => {
  return (
    <Stack spacing={2} component="section" sx={{ mt: 2.5 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" flexWrap="wrap">
        <Typography variant="h3" component="h3" sx={{ mr: 1 }}>
          {title}
        </Typography>

        <FormControlLabel
          className={cls.label}
          label="Сохранить реквизиты"
          labelPlacement="start"
          control={<Checkbox />}
        />
      </Stack>

      {editableInfoData.map(({ id, label, variants }) => (
        <EditableInfo key={id} label={label} variants={variants} />
      ))}
    </Stack>
  );
};
