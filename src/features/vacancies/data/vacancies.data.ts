import {VacancyType} from '../model/types';

const company: VacancyType['company'] = {
  id: '1',
  name: 'Azeros',
  about:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit erat a bibendum efficitur. Phasellus velit enim, convallis non sagittis non, sagittis in ex.',
  rate: 4,
  geo: 'Russia, Moscow',
  cat: 'It',
  image:
    'https://hsto.org/getpro/moikrug/uploads/company/100/006/341/2/logo/medium_ec0ed33f5cb160c20cdc1ba499a75d2b.png',
};
export const VacanciesListData: VacancyType[] = Array.from(Array(10)).map(
  (_, index) => ({
    title: 'Frontend developer',
    about: '-',
    geo: company.geo,
    rateVacancy: 4,
    id: index?.toString(),
    company,
  }),
);
