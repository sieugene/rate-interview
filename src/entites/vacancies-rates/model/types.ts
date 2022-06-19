import {VacancyType} from '../../../features/vacancies/model/types';

export interface VacancyRate {
  vacancyId: VacancyType['id'];
  comment: string;
  rate: number;
  id: string;
}
