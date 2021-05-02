const HeaderSection = ({ offer }) => {
  return (
    <div className="flex flex-row items-center shadow-md p-5 mb-5 bg-gray-700 text-white rounded-md">
      <div className="w-1/4">
        <img
          className="shadow max-h-36 max-w-36 p-2 m-auto bg-white rounded-md"
          src={offer.company.logo_file_path}
        />
      </div>
      <div className="ml-5">
        <h1 className="my-1 text-2xl">{offer.title}</h1>
        <p className="my-1 text-lg">{offer.company.name}</p>
        <address className="text-sm font-thin">
          <ul>
            {offer.company.locations.map((location) => (
              <li key={location.id} className="list-disc ml-5">
                {location.street}, {location.city}
              </li>
            ))}
          </ul>
        </address>
        <p className="shadow my-2 text-xl text-black bg-white rounded-lg text-center">
          {offer.salary_from} - {offer.salary_to} PLN
        </p>
      </div>
    </div>
  );
};

export default HeaderSection;
