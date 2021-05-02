export const SingleOfferList = ({ offer }) => (
  <div
    key={`offer-${offer.id}`}
    className="flex w-full min-h-32 p-4 rounded-lg shadow-md bg-white my-1"
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
          {offer.locations.map((location) => (
            <p className="px-1">🏢 {location.city}</p>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center ml-3">
        <div className="flex flex-grow text-xl">
          <p className="font-bold">
            {offer.salary_from} - {offer.salary_to} PLN
          </p>
        </div>
        <div>
          <p>profesja - specjalizacja</p>
        </div>
      </div>
    </div>
  </div>
);
