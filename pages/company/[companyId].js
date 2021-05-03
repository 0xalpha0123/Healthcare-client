import { useRouter } from 'next/router';
import { useQuery } from 'react-fetching-library';

import { getCompanyById } from '../../src/api/actions/companyActions';

import Layout from '../../src/components/ui/layout/Layout';
import CompanyDetails from '../../src/components/CompanyDetails';
import CompanyOfferCard from '../../src/components/CompanyDetails/CompanyOfferCard';

const Company = () => {
  const router = useRouter();
  const { companyId } = router.query;

  const { payload } = useQuery(getCompanyById({ id: companyId }));
  console.log('>> company details', payload);

  if (payload) {
    return (
      <Layout>
        <div className="flex w-full overflow-scroll">
          <div className="flex flex-col p-5 bg-gray-100 w-full h-full">
            <CompanyDetails company={payload} />
          </div>
          <div className="w-full overflow-scroll shadow-mg">
            <div className="flex p-4 flex-col">
              {payload.offers.map((offer) => (
                <CompanyOfferCard offer={offer} />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return '';
};

export default Company;
