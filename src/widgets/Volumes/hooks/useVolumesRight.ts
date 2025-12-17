import { useDebounce } from '@/shared/hooks/useDebounce';

import { useGetVolumesData } from './data/useGetVolumesData';

import { GET_DATA_DELAY } from '../config/debounce';
import { VolumeSetStateType } from '../types/VolumesTypes';

export const useVolumesRight = (setRightValue: VolumeSetStateType, setLeftValue: VolumeSetStateType) => {
  const getData = useGetVolumesData();

  const handleUpdate = (val: number) => {
    getData({ outAmount: val }).then((data) => {
      setLeftValue(Number(data.inAmount));
    });
  };

  const debouncedGetData = useDebounce(handleUpdate, GET_DATA_DELAY);

  return (val: number) => {
    setRightValue(val);
    debouncedGetData(val);
  };
};
