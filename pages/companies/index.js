import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';

import { FetchClient } from '../../src/context/ClientContextController';
import { getCompaniesAction, getUniqueLocations } from '../../src/api/actions/companyActions';
import CompanyList from '../../src/components/CompanyList';
import { CompaniesContextController } from '../../src/context/CompaniesContextController';
import Filters from '../../src/components/CompanyList/Filters';

const Companies = ({ companies, locations }) => {
  const CompanyMap = dynamic(() => import('../../src/components/CompanyMap'), {
    ssr: false,
  });

  return (
    <CompaniesContextController companies={companies}>
      <div className="h-full">
        <div className="md:h-1/6">
          <Filters locations={locations} />
        </div>
        <div className="flex w-full md:h-5/6 pt-4 md:pt-0">
          <CompanyList />
          <div className="w-full hidden md:block">
            <CompanyMap />
          </div>
        </div>
      </div>
    </CompaniesContextController>
  );
};

export const getServerSideProps = async (ctx) => {
  const { payload: companies } = await FetchClient.query(getCompaniesAction({}));
  const { payload: locations } = await FetchClient.query(getUniqueLocations({}));
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale, ['common'])),
      companies,
      locations,
    },
  };
};

export default Companies;
