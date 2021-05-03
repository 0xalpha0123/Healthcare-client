import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const OfferCard = ({ company }) => {
  const router = useRouter();

  const goToCompany = (id) => {
    router.push(`/company/${id}`);
  };

  const companyDescription = () => {
    const descriptionMaxLenght = 250;

    return company.description.length > descriptionMaxLenght
      ? company.description.substr(0, descriptionMaxLenght - 1) + '...'
      : company.description;
  };

  return (
    <div
      key={`company-${company.id}`}
      onClick={() => goToCompany(company.id)}
      className="flex w-full min-h-32 p-4 rounded-lg shadow-md bg-white my-1 cursor-pointer box-border border border-gray-100 hover:border-gray-300"
    >
      <div className="flex justify-center w-20 p-1">
        <img
          className="self-center max-w-full max-h-full"
          src={company.logo_file_path}
        />
      </div>
      <div className="flex flex-grow">
        <div className="flex flex-col w-1/2 ml-8">
          <p className="text-2xl">{company.name}</p>
          <hr className="my-2" />
          <p className="text-xs">{companyDescription()}</p>
        </div>
        <div className="flex flex-col justify-center ml-8">
          {company.locations.map((location) => (
            <p className="px-1 text-sm text-gray-600">
              <FontAwesomeIcon icon={faMapMarkerAlt} size={'xs'} />{' '}
              <span>{location.street}, </span>
              <span>{location.postcode} </span>
              <span>{location.city}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
