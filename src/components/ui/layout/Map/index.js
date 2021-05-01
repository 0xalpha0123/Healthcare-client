import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import { MapContainer, TileLayer } from 'react-leaflet';

import MapMarker from './MapMarker';

const Map = ({ onMarkerShowDetailsClick, offers }) => {
  const mapBounds = (offers) => {
    return offers.map((offer) =>
      offer.company.locations.map((location) => [
        location.coordinates.x,
        location.coordinates.y,
      ])
    );
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
        offer.company.locations.map((location) => (
          <MapMarker
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
