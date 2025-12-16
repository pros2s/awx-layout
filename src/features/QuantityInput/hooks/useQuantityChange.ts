import { ChangeEvent, useState } from 'react';

interface QuantityChangeArgsType {
  onChange: (num: number) => void;
  min: number;
  max: number;
}

export const useQuantityChange = ({ max, min, onChange }: QuantityChangeArgsType) => {
  return (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const value = Number(e.target.value);

    if (!Number.isNaN(value) && value <= max && value >= min) {
      onChange(value);
    }
  };
};
