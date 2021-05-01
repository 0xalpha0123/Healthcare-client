import { useQuery } from 'react-fetching-library';

import { getOfferAction } from '../../api/actions/offerActions';

import Layout from '../ui/layout/Layout';
import ApplySection from './ApplySection';
import CompanySection from './CompanySection';
import HeaderSection from './HeaderSection';
import OfferSection from './OfferSection';

import { offersMock } from '../app/offersMock';

const OfferDetails = ({ offerId }) => {
  // TODO: invalid server response atm
  const { payload } = useQuery(getOfferAction({ id: offerId }));

  const offer = offersMock[0];

  if (offer) {
    return (
      <Layout offers={[offer]}>
        <div className="flex flex-col p-5 bg-gray-100">
          <HeaderSection offer={offer} />
          <OfferSection description={offer.description} />
          <CompanySection description={offer.company.description} />
          <ApplySection />
        </div>
      </Layout>
    );
  }

  return '';
};

export default OfferDetails;
