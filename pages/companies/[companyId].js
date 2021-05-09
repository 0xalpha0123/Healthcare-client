import { FetchClient } from '../../src/context/ClientContextController';
import { getCompanyByIdAction } from '../../src/api/actions/companyActions';
import CompanyDetails from '../../src/components/CompanyDetails';
import CompanyOfferCard from '../../src/components/CompanyDetails/CompanyOfferCard';

const Company = ({ company }) => {
  if (company) {
    return (
      <div className="flex w-full">
        <div className="flex flex-col p-5 bg-gray-100 w-full h-full overflow-scroll">
          <CompanyDetails company={company} />
        </div>
        <div className="w-full shadow-mg overflow-scroll">
          <div className="flex p-4 flex-col">
            {company.offers.map((offer) => (
              <CompanyOfferCard offer={offer} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return '';
};

export const getServerSideProps = async (ctx) => {
  const { payload } = await FetchClient.query(getCompanyByIdAction({ id: ctx.query.companyId }));

  return {
    props: {
      company: payload,
    },
  };
};

export default Company;
