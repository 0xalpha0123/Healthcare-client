import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const OfferCard = ({ offer }) => {
  const router = useRouter();

  const goToOffer = (id) => {
    router.push(`/offer/${id}`);
  };

  return (
    <div
      key={`offer-${offer.id}`}
      onClick={() => goToOffer(offer.id)}
      className="flex w-full min-h-32 p-4 rounded-lg shadow-md bg-white my-1 cursor-pointer box-border border border-gray-100 hover:border-gray-300"
    >
      <div className="flex justify-center w-20 p-1">
        <img
          className="self-center max-w-full max-h-full"
          src={offer.company.logo_file_path}
        />
      </div>
      <div className="flex flex-grow">
        <div className="flex flex-col flex-grow ml-3">
          <div className="flex flex-grow text-lg font-bold">
            <p>{offer.title}</p>
          </div>
          <div>
            <p>{offer.company.name}</p>
            <hr className="my-1 w-36" />
            {offer.locations.map((location) => (
              <p className="px-1 text-sm text-gray-600">
                <FontAwesomeIcon icon={faMapMarkerAlt} size={"xs"} />{" "}
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

export default OfferCard;
