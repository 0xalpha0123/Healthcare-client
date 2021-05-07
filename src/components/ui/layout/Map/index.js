import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import { MapContainer, TileLayer } from 'react-leaflet';

import CompanyMarker from './CompanyMarker';
import OfferMarker from './OfferMarker';

const polandBoundsCoordSet = [
  [53.948, 14.56],
  [53.948, 14.56],
  [49.116, 22.516],
];

const Map = ({ data, type }) => {
  console.log(data);
  const mapBounds = (data) => {
    if (data.length === 0) {
      return polandBoundsCoordSet;
    }

    return data.map((entity) =>
      entity.locations.map((location) => [
        location.coordinates.x,
        location.coordinates.y,
      ])
    );
  };

  return (
    <div className="w-full h-full">
      <MapContainer
        bounds={mapBounds(data)}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          className="z-10"
        />
        {data.map((entity) =>
          entity.locations.map((location) => {
            if (type === 'offer') {
              return (
                <OfferMarker
                  key={`marker-offer-${entity.id}-${location.id}`}
                  location={location}
                  offer={entity}
                />
              );
            } else if (type === 'company') {
              return (
                <CompanyMarker
                  key={`marker-company-${entity.id}-${location.id}`}
                  location={location}
                  company={entity}
                />
              );
            }
          })
        )}
      </MapContainer>
    </div>
  );
};

export default Map;
