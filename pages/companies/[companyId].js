import { FetchClient } from '../../src/context/ClientContextController';
import { getCompanyByIdAction } from '../../src/api/actions/companyActions';
import CompanyDetails from '../../src/components/CompanyDetails';
import CompanyOffers from '../../src/components/CompanyDetails/CompanyOffers';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Company = ({ company }) => {
  return (
    <div className="flex flex-col md:flex-row w-full h-full">
      <div className="md:h-full w-full">
        <CompanyDetails company={company} />
      </div>
      <div className="md:h-full w-full">
        <CompanyOffers offers={company.offers} />
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const { payload } = await FetchClient.query(getCompanyByIdAction({ id: ctx.query.companyId }));
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale, ['common'])),
      company: payload,
    },
  };
};

export default Company;
