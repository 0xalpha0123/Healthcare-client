import CompanyCard from '../CompanyList/CompanyCard';
import classes from '../OfferList/custom.module.css';
import CompanyDescription from './CompanyDescription';
import CompanyGallery from './CompanyGallery';
const CompanyDetails = ({ company }) => {
  return (
    <div className="h-full flex flex-col">
      <div className="md:w-1/2 m-auto">
        <CompanyCard company={company} />
      </div>
      <div className={classes.list}>
        <CompanyDescription description={company.description} />
        <CompanyGallery photos={company.photos} />
      </div>
    </div>
  );
};

export default CompanyDetails;
