// TODO: this should probably be moved to a page
// import { useOfferContext } from '/src/context/offerContextController.js/OfferContextController.jsr';
import ApplySection from './ApplySection';
import CompanySection from './CompanySection';
import HeaderSection from './HeaderSection';
import OfferSection from './OfferSection';

import { offersMock } from '../app/offersMock';

const OfferDetails = ({ offer }) => {
  console.log('>> OfferDetails', offer);
  offer = offersMock[0];

  if (offer) {
    return (
      <div className="flex flex-col w-1/2 p-5 bg-gray-100">
        <HeaderSection offer={offer} />
        <CompanySection description={offer.company.description} />
        <OfferSection description={offer.description} />
        <ApplySection />
      </div>
    );
  }

  return '';
};

export default OfferDetails;
