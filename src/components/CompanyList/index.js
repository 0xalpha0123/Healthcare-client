import { useEffect } from 'react';
import { useCompaniesContext } from '../../context/CompaniesContextController';
import CompanyCard from './CompanyCard';
import classes from '../OfferList/custom.module.css';
import NoResults from '../ui/NoResults';
import { useTranslation } from 'react-i18next';

function CompanyList() {
  const companiesContext = useCompaniesContext();
  const { t } = useTranslation('common');
  useEffect(() => {}, [companiesContext.companiesList]);
  return (
    <div className={classes.list + ' flex flex-wrap w-full justify-center md:justify-start px-2'}>
      {companiesContext.companiesList.length ? (
        companiesContext.companiesList.map((company, key) => (
          <CompanyCard company={company} key={key} />
        ))
      ) : (
        <NoResults message={t('noCompanies')} />
      )}
    </div>
  );
}

export default CompanyList;
