import { useQuery } from 'react-fetching-library';
import dynamic from 'next/dynamic';

import { getOfferAction } from '../../api/actions/offerActions';

import Layout from '../ui/layout/Layout';
import ApplySection from './ApplySection';
import CompanySection from './CompanySection';
import HeaderSection from './HeaderSection';
import OfferSection from './OfferSection';

const OfferDetails = ({ offerId }) => {
  const Map = dynamic(() => import('../ui/layout/Map/'), { ssr: false });
  const { payload } = useQuery(getOfferAction({ id: offerId }));

  if (payload) {
    return (
      <Layout>
        <div className="flex w-full">
          <div className="flex flex-col w-full overflow-scroll p-5 bg-gray-100 h-full">
            <HeaderSection offer={payload} />
            <OfferSection description={payload.description} />
            <CompanySection description={payload.company.description} />
            <ApplySection />
          </div>
          <div className="w-full">
            <Map offers={[payload]} />
          </div>
        </div>
      </Layout>
    );
  }

  return '';
};

export default OfferDetails;
