import {useAllVacancies} from './useAllVacancies';

export const useFindVacancyById = (vacancyId: string) => {
  const data = useAllVacancies();
  return data?.find(company => company.id === vacancyId);
};
