import { useState } from 'react';

import { useDebounce } from '@/shared/hooks/useDebounce';

import { useGetVolumesData } from './data/useGetVolumesData';

import { GET_DATA_DELAY } from '../config/debounce';
import { VolumeSetStateType } from '../types/VolumesTypes';

export const useVolumesRight = (setRightValue: VolumeSetStateType, setLeftValue: VolumeSetStateType) => {
  const [isLeftLoading, setIsLeftLoading] = useState(false);

  const getData = useGetVolumesData();

  const handleUpdate = (val: number) => {
    setIsLeftLoading(true);

    getData({ outAmount: val })
      .then((data) => {
        setLeftValue(Number(data.inAmount));
      })
      .finally(() => setIsLeftLoading(false));
  };

  const debouncedGetData = useDebounce(handleUpdate, GET_DATA_DELAY);

  const handleRightChange = (val: number) => {
    setRightValue(val);
    debouncedGetData(val);
  };

  return { handleRightChange, isLeftLoading };
};
