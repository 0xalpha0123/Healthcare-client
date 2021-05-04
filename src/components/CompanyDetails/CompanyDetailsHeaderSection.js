import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const CompanyDetailsHeaderSection = ({ company }) => (
  <div className="flex flex-row shadow-md p-5 mb-5 bg-primary text-white rounded-md">
    <div className="w-1/4">
      <img
        className="shadow max-h-36 max-w-36 p-2 m-auto bg-white rounded-md"
        src={company.logo_file_path}
      />
    </div>
    <div className="flex flex-col flex-grow ml-5 h-full">
      <h1 className="my-1 text-3xl">{company.name}</h1>
      <hr className="my-2 opacity-30" />
      <address className="flex flex-col flex-grow text-sm font-thin">
        {company.locations.map((location) => (
          <p key={`address-${location.id}`}>
            <FontAwesomeIcon icon={faMapMarkerAlt} size={'xs'} />{' '}
            <span className="ml-1">
              {location.street}, {location.city}
            </span>
          </p>
        ))}
      </address>
    </div>
  </div>
);

export default CompanyDetailsHeaderSection;
