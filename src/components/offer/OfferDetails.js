// TODO: this should probably be moved to a page
// import { useOfferContext } from '/src/context/offerContextController.js/OfferContextController.jsr';

import { offersMock } from '../app/offersMock';

const OfferDetails = ({ offer }) => {
  console.log('>> OfferDetails', offer);
  offer = offersMock[0];

  if (offer) {
    return (
      <div>
        {/* TODO: mock logo_file_path in DB */}
        <img src={offer.company.logo_file_path} />
        <h1>{offer.title}</h1>
        <p>{offer.company.name}</p>
        <address>
          {/* TODO: it should know which location to take - not the first one every time */}
          {offer.company.locations[0].street}, {offer.company.locations[0].city}
        </address>
        <p>
          {offer.salary_from}-{offer.salary_to} PLN
        </p>
        <hr />
        {/* TODO: mock desc in DB */}
        <p>{offer.company.description}</p>
        <hr />
        {/* TODO: mock desc in DB */}
        <p>{offer.description}</p>
      </div>
    );
  }

  return '';
};

export default OfferDetails;
