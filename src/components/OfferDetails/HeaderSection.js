import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faSyringe } from '@fortawesome/free-solid-svg-icons';

const HeaderSection = ({ offer }) => {
  const router = useRouter();

  const goToCompany = (id) => {
    router.push(`/company/${id}`);
  };

  if (offer) {
    return (
      <div className="flex flex-row items-center shadow-md p-5 mb-5 bg-primary text-white rounded-md">
        <div
          className="w-1/4 cursor-pointer"
          onClick={() => goToCompany(offer.company.id)}
        >
          <img
            className="shadow max-h-36 max-w-36 p-2 m-auto bg-white rounded-md"
            src={offer.company.logo_file_path}
          />
        </div>
        <div className="ml-5 flex-grow flex flex-col">
          <h1 className="my-1 text-2xl">{offer.title}</h1>
          <p className="text-sm my-1">
            <FontAwesomeIcon icon={faSyringe} size={'xs'} />{' '}
            <span>
              {offer.profession.name} - {offer.specialization.name}
            </span>
          </p>
          <hr className="mt-2 opacity-30" />
          <p
            className="my-1 text-lg cursor-pointer self-start"
            onClick={() => goToCompany(offer.company.id)}
          >
            {offer.company.name}
          </p>
          <address className="text-sm font-thin">
            {offer.locations.map((location) => (
              <p key={`address-${location.id}`}>
                <FontAwesomeIcon icon={faMapMarkerAlt} size={'xs'} />{' '}
                <span className="ml-1">
                  {location.street}, {location.city}
                </span>
              </p>
            ))}
          </address>
          <p className="shadow my-2 text-xl text-black bg-white rounded-lg text-center">
            {offer.salary_from} - {offer.salary_to} PLN
          </p>
        </div>
      </div>
    );
  }
};

export default HeaderSection;
