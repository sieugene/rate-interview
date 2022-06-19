import {VacancyType} from '../../../features/vacancies/model/types';
import {useAppSelector} from './../../../@app/store/hooks/index';

export const useVacancyRates = (id: VacancyType['id']) => {
  return useAppSelector(state =>
    state.vacanciesRates.rates.filter(rate => rate.vacancyId === id),
  );
};
