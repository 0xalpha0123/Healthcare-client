import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const CompanyOfferCard = ({ offer }) => {
  const router = useRouter();

  const goToOffer = (id) => {
    router.push(`/offer/${id}`);
  };

  return (
    <div
      key={`company-offer-${offer.id}`}
      onClick={() => goToOffer(offer.id)}
      className="flex w-full min-h-32 p-4 rounded-lg shadow-md bg-white my-1 cursor-pointer box-border border border-gray-100 hover:border-gray-300"
    >
      <div className="flex flex-grow">
        <div className="flex flex-col flex-grow ml-3">
          <div className="flex flex-grow text-lg font-bold">
            <p>{offer.title}</p>
          </div>
          <div>
            <hr className="my-1 w-36" />
            {offer.locations.map((location) => (
              <p className="px-1 text-sm text-gray-600">
                <FontAwesomeIcon icon={faMapMarkerAlt} size={'xs'} />{' '}
                <span>{location.street}, </span>
                <span>{location.postcode} </span>
                <span>{location.city}</span>
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-end ml-3">
          <div className="flex flex-grow text-xl">
            <p className="font-bold text-gray-800">
              {offer.salary_from} - {offer.salary_to} PLN
            </p>
          </div>
          <div>
            <p className="text-gray-700 text-sm">
              {offer.profession.name} - {offer.specialization.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyOfferCard;
