import { useState } from 'react';

import { quantitiesData } from '../config/quantitiesData';

const { min, max, step } = quantitiesData.eth;

export const useVolumesLeft = () => {
  const [leftValue, setLeftValue] = useState(min);

  const handleLeftChange = (val: number) => {
    setLeftValue(val);
  };

  const handleLeftRemove = () => {
    if (leftValue >= min + step) {
      setLeftValue((val) => val - step);
    }
  };

  const handleLeftAdd = () => {
    if (leftValue <= max - step) {
      setLeftValue((val) => val + step);
    }
  };

  return { leftValue, handleLeftRemove, handleLeftAdd, handleLeftChange };
};
