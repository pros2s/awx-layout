import { useState } from 'react';

import { quantitiesData } from '../config/quantitiesData';
const { step } = quantitiesData.rub;
const round = String(step).split('.')[1].length;

interface VolumesRightArgsType {
  min: number;
  max: number;
}

export const useVolumesRight = ({ max, min }: VolumesRightArgsType) => {
  const [rightValue, setRightValue] = useState(min);

  const handleRightChange = (val: number) => {
    setRightValue(val);
  };

  const handleRightRemove = () => {
    if (rightValue >= min + step) {
      setRightValue((val) => Number((val - step).toFixed(round)));
    }
  };

  const handleRightAdd = () => {
    if (rightValue <= max - step) {
      setRightValue((val) => Number((val + step).toFixed(round)));
    }
  };

  return { rightValue, handleRightRemove, handleRightAdd, handleRightChange };
};
