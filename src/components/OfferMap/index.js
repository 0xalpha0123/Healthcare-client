import { useOffersContext } from '../../context/offersContextController/OffersContextController';
import Map from '../ui/Map';
import OfferMarker from './OfferMarker';

function OfferMap() {
  const offersContext = useOffersContext();

  const markers = offersContext.offersList.map((entity) =>
    entity.locations.map((location) => (
      <OfferMarker
        key={`marker-offer-${entity.id}-${location.id}`}
        location={location}
        offer={entity}
      />
    ))
  );

  const bounds = offersContext.offersList.map((entity) =>
    entity.locations.map((location) => [location.coordinates.x, location.coordinates.y])
  );

  return <Map markers={markers} bounds={bounds} />;
}

export default OfferMap;
