import { useCallback, useState } from 'react';

import { useDebounce } from '@/shared/hooks/useDebounce';

import { useGetVolumesData } from './data/useGetVolumesData';

import { GET_DATA_DELAY } from '../config/debounce';
import { VolumeSetStateType } from '../types/VolumesTypes';

export const useVolumesLeft = (setLeftValue: VolumeSetStateType, setRightValue: VolumeSetStateType) => {
  const [isRightLoading, setIsRightLoading] = useState(false);

  const getData = useGetVolumesData();

  const handleUpdate = (val: number) => {
    setIsRightLoading(true);

    getData({ inAmount: val })
      .then((data) => {
        setRightValue(Number(data.outAmount));
      })
      .finally(() => setIsRightLoading(false));
  };

  const debouncedGetData = useDebounce(handleUpdate, GET_DATA_DELAY);

  const handleLeftChange = useCallback(
    (val: number) => {
      setLeftValue(val);
      debouncedGetData(val);
    },
    [setLeftValue, debouncedGetData],
  );

  return { handleLeftChange, isRightLoading };
};
