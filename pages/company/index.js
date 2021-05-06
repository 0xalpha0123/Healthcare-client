import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';

import { FetchClient } from '../../src/context/clientContextController/ClientContextController';
import { getCompaniesAction } from '../../src/api/actions/companyActions';
import CompanyCard from '../../src/components/CompanyList/CompanyCard';

const Companies = ({ companies }) => {
  const Map = dynamic(() => import('../../src/components/ui/layout/Map/'), {
    ssr: false,
  });

  if (companies) {
    return (
      <div className="flex w-full h-full">
        <div className="flex flex-col w-full p-5 bg-gray-100 overflow-scroll">
          {companies.map((company) => (
            <CompanyCard company={company} />
          ))}
        </div>
        <Map data={companies} type="company" />
      </div>
    );
  }

  return '';
};

export const getServerSideProps = async (ctx) => {
  const { payload } = await FetchClient.query(getCompaniesAction());

  return {
    props: {
      ...(await serverSideTranslations(ctx.locale, ['common'])),
      companies: payload,
    },
  };
};

export default Companies;
