import dynamic from 'next/dynamic';

import ApplySection from './ApplySection';
import CompanySection from './CompanySection';
import HeaderSection from './HeaderSection';
import OfferSection from './OfferSection';

const OfferDetails = ({ offer }) => {
  const Map = dynamic(() => import('../ui/layout/Map/'), { ssr: false });

  if (offer) {
    return (
      <div className="flex w-full overflow-hidden">
        <div className="flex flex-col p-5 bg-gray-100 h-full w-full overflow-scroll">
          <HeaderSection offer={offer} />
          <OfferSection description={offer.description} />
          <CompanySection description={offer.company.description} />
          <ApplySection />
        </div>
        <div className="w-full">
          <Map offers={[offer]} />
        </div>
      </div>
    );
  }

  return '';
};

export default OfferDetails;
