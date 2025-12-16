import { useCallback, useEffect } from 'react';

import { BASE_URL, HEADER_SERIAL } from '@/shared/api/api';

export const useVolumesData = (inAmount: number) => {
  const getDate = useCallback(async () => {
    try {
      const data = fetch(`${BASE_URL}/change/user/pair/calc`, {
        method: 'post',
        headers: {
          'Content-type': 'application/json',
          Serial: HEADER_SERIAL,
        },
        body: JSON.stringify({
          pairId: 133,
          inAmount,
          outAmount: null,
          isStraight: false,
        }),
      });

      return data;
    } catch (err) {
      console.error(err);
    }
  }, [inAmount]);

  useEffect(() => {
    getDate();
  }, [getDate]);
};
