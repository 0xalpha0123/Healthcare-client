import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = ({ onMarkerShowDetailsClick, offers }) => {
  const offersToBounds = (offers) => {
    // TODO: we need to know which offer is connected to which location
    return offers.map((offer) => [
      offer.company.locations[0].coordinates.x,
      offer.company.locations[0].coordinates.y,
    ]);
  };

  return (
    <MapContainer
      bounds={offersToBounds(offers)}
      scrollWheelZoom={true}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {offers.map((offer) => (
        <Marker
          position={[
            offer.company.locations[0].coordinates.x,
            offer.company.locations[0].coordinates.y,
          ]}
          draggable={false}
          animate={true}
        >
          <Popup style={{ width: '1500px' }}>
            <img
              className="m-auto"
              style={{
                maxHeight: '120px',
                maxWidth: '120px',
              }}
              src={offer.company.logo_file_path}
            />

            <span className="block my-1 font-bold">{offer.company.name}</span>
            <span className="block my-1">{offer.title}</span>
            <span className="block my-1">
              {offer.salary_from} - {offer.salary_to} PLN
            </span>
            <button
              className="block m-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                onMarkerShowDetailsClick(offer.id);
              }}
            >
              {/* TODO: it should be imported from translations */}
              Show details
            </button>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
