import { useDebounce } from '@/shared/hooks/useDebounce';

import { useGetVolumesData } from './data/useGetVolumesData';

import { GET_DATA_DELAY } from '../config/debounce';
import { VolumeSetStateType } from '../types/VolumesTypes';

export const useVolumesLeft = (setLeftValue: VolumeSetStateType, setRightValue: VolumeSetStateType) => {
  const getData = useGetVolumesData();

  const handleUpdate = (val: number) => {
    getData({ inAmount: val }).then((data) => {
      setRightValue(Number(data.outAmount));
    });
  };

  const debouncedGetData = useDebounce(handleUpdate, GET_DATA_DELAY);

  return (val: number) => {
    setLeftValue(val);
    debouncedGetData(val);
  };
};
