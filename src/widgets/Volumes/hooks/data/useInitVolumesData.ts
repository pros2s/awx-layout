import { useEffect, useState } from 'react';

import { useGetVolumesData } from './useGetVolumesData';

import { quantitiesData } from '../../config/quantitiesData';
import { VolumeSetStateType } from '../../types/VolumesTypes';

export const useInitVolumesData = (setRightValue: VolumeSetStateType) => {
  const [minmaxRight, setMinmaxRight] = useState<number[]>([]);

  const getData = useGetVolumesData();

  useEffect(() => {
    getData({ inAmount: quantitiesData.eth.min }).then((data) => {
      const newRightValue = Number(data.outAmount);

      const newMin = Math.min(Number(data.price[0]) * quantitiesData.eth.min, newRightValue);
      const newMax = Math.max(Number(data.price[0]) * quantitiesData.eth.max, newRightValue);

      setMinmaxRight([newMin, newMax]);
      setRightValue(newRightValue);
    });
  }, [getData]);

  return minmaxRight;
};
