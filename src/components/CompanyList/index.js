import { useEffect } from 'react';
import { useCompaniesContext } from '../../context/CompaniesContextController';
import CompanyCard from './CompanyCard';
function CompanyList() {
  const companiesContext = useCompaniesContext();
  useEffect(() => {}, [companiesContext.companiesList]);
  return (
    <div className="flex flex-col w-full p-5 bg-gray-100 overflow-scroll">
      {companiesContext.companiesList.map((company, key) => (
        <CompanyCard company={company} key={key} />
      ))}
    </div>
  );
}

export default CompanyList;
