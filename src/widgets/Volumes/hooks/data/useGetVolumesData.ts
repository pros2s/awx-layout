import { useCallback } from 'react';

import { API_BASE_URL, API_HEADER_SERIAL, API_PAIR_ID } from '@/shared/api/api';

interface GetVolumesDataArgsType {
  inAmount?: number;
  outAmount?: number;
}

export const useGetVolumesData = () => {
  return useCallback(async (args: GetVolumesDataArgsType) => {
    const { inAmount = null, outAmount = null } = args;

    try {
      const data = await fetch(`${API_BASE_URL}/change/user/pair/calc`, {
        method: 'post',
        headers: {
          'Content-type': 'application/json',
          Serial: API_HEADER_SERIAL,
        },
        body: JSON.stringify({
          pairId: API_PAIR_ID,
          isStraight: true,
          inAmount,
          outAmount,
        }),
      });

      const json = await data.json();

      return json;
    } catch (err) {
      console.error(err);
    }
  }, []);
};
