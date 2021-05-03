import { useRouter } from 'next/router';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import { MapContainer, TileLayer } from 'react-leaflet';

import MapMarker from './MapMarker';

const polandBoundsCoordSet = [
  [53.948, 14.56],
  [53.948, 14.56],
  [49.116, 22.516],
];

const Map = ({ offers }) => {
  const router = useRouter();

  const mapBounds = (offers) => {
    if (offers.length === 0) {
      return polandBoundsCoordSet;
    }

    return offers.map((offer) =>
      offer.locations.map((location) => [
        location.coordinates.x,
        location.coordinates.y,
      ])
    );
  };

  const onMarkerShowDetailsClick = (id) => {
    router.push(`/offer/${id}`);
  };

  return (
    <MapContainer
      bounds={mapBounds(offers)}
      scrollWheelZoom={true}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {offers.map((offer) =>
        offer.locations.map((location) => (
          <MapMarker
            key={`marker-${offer.id}-${location.id}`}
            location={location}
            offer={offer}
            onMarkerShowDetailsClick={onMarkerShowDetailsClick}
          />
        ))
      )}
    </MapContainer>
  );
};

export default Map;
