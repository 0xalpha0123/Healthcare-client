import { useQuery } from 'react-fetching-library';

import { getOfferAction } from '../../api/actions/offerActions';

import Layout from '../ui/layout/Layout';
import ApplySection from './ApplySection';
import CompanySection from './CompanySection';
import HeaderSection from './HeaderSection';
import OfferSection from './OfferSection';

const OfferDetails = ({ offerId }) => {
  const { payload } = useQuery(getOfferAction({ id: offerId }));
  console.log('>> payload', payload);

  if (payload) {
    return (
      <Layout offers={[payload]}>
        <div className="flex flex-col p-5 bg-gray-100">
          <HeaderSection offer={payload} />
          <OfferSection description={payload.description} />
          <CompanySection description={payload.company.description} />
          <ApplySection />
        </div>
      </Layout>
    );
  }

  return '';
};

export default OfferDetails;
