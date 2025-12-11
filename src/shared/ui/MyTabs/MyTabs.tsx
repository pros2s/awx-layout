import { SyntheticEvent, useState } from 'react';

import { Tab, Tabs } from '@mui/material';

import { a11yProps } from './utils/a11yProps';

export interface MyTabItemType {
  id: string;
  label: string;
  iconSrc?: string;
}

interface MyTabsPropsType {
  items: MyTabItemType[];
  gap?: number | string;
  className?: string;
  tabClassName?: string;
}

export const MyTabs = ({ items, className, tabClassName, gap }: MyTabsPropsType) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs
      className={className}
      value={value}
      onChange={handleChange}
      aria-label="basic tabs example"
      sx={{
        '& .MuiTabs-flexContainer': {
          gap,
        },
      }}
    >
      {items.map(({ label, iconSrc, id }, i) => (
        <Tab key={id} className={tabClassName} label={label} icon={iconSrc} {...a11yProps(i)} />
      ))}
    </Tabs>
  );
};
