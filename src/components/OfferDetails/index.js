import ApplySection from './ApplySection';
import CompanySection from './CompanySection';
import HeaderSection from './HeaderSection';
import OfferSection from './OfferSection';
import classes from '../OfferList/custom.module.css';
import OfferCard from '../OfferList/OfferCard';

const OfferDetails = ({ offer }) => {
  return (
    <div className={classes.list}>
      <OfferCard offer={offer} type="static" />
      <OfferSection description={offer.description} />
      <CompanySection description={offer.company.description} />
      <ApplySection />
    </div>
  );
};

export default OfferDetails;
