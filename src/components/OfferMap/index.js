import { useOffersContext } from '../../context/OffersContextController';
import Map from '../ui/Map';
import OfferMarker from './OfferMarker';

function OfferMap({ offer, hidePopups = false }) {
  const offersContext = useOffersContext();
  const list = offersContext.offersList.length ? offersContext.offersList : offer ? [offer] : [];
  const markers = list.map((entity) =>
    entity.locations.map((location) => (
      <OfferMarker
        key={`marker-offer-${entity.id}-${location.id}`}
        location={location}
        offer={hidePopups ? null : entity}
      />
    ))
  );
  let bounds = list.map((entity) =>
    entity.locations.map((location) => [location.coordinates.x, location.coordinates.y])
  );

  return <Map markers={markers} bounds={bounds} />;
}

export default OfferMap;
