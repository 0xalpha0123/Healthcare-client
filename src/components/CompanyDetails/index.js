import CompanyDetailsDescriptionSection from './CompanyDetailsDescriptionSection';
import CompanyDetailsGallerySection from './CompanyDetailsGallerySection';
import CompanyDetailsHeaderSection from './CompanyDetailsHeaderSection';

const CompanyDetails = ({ company }) => {
  if (company) {
    return (
      <div>
        <CompanyDetailsHeaderSection company={company} />
        <CompanyDetailsDescriptionSection description={company.description} />
        {company.photos.length > 0 ? (
          <CompanyDetailsGallerySection photos={company.photos} />
        ) : (
          ''
        )}
      </div>
    );
  }

  return '';
};

export default CompanyDetails;
