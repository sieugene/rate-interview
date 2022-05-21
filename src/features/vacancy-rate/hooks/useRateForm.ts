import {useState} from 'react';

export const useRateForm = () => {
  const [rate, setRate] = useState({
    star: 0,
    description: '',
  });

  return {rate, setRate};
};
export type RateFormProps = ReturnType<typeof useRateForm>;
