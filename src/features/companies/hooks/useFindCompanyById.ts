import {useAllCompanies} from './useAllCompanies';

export const useFindCompanyById = (companyId: string) => {
  const data = useAllCompanies();
  return data?.find(company => company.id === companyId);
};
