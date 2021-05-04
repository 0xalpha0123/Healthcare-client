import Layout from '../ui/layout/Layout';
import ApplySection from './ApplySection';
import CompanySection from './CompanySection';
import HeaderSection from './HeaderSection';
import OfferSection from './OfferSection';

const OfferDetails = ({ offer }) => {
  if (offer) {
    return (
      <Layout offers={[offer]}>
        <div className="flex flex-col p-5 bg-gray-100 h-full">
          <HeaderSection offer={offer} />
          <OfferSection description={offer.description} />
          <CompanySection description={offer.company.description} />
          <ApplySection />
        </div>
      </Layout>
    );
  }

  return "";
};

export default OfferDetails;
