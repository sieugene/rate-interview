export type VacancyType = {
  title: string;
  about: string;
  geo: string;
  rateVacancy: number;
  id: string;
  company: {
    id: string;
    name: string;
    about: string;
    cat: string;
    rate: number;
    geo: string;
    image: string;
  };
};
