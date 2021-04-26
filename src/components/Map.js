import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

const Map = ({ points, offers }) => {
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
            {/* <div className="flex flex-row">
              <div> */}
            <img src={offer.company.logo_file_path} />
            {/* </div> */}
            {/* <div> */}
            <p className="font-bold">{offer.company.name}</p>
            <p>{offer.title}</p>
            <p>
              {offer.salary_from} - {offer.salary_to} PLN
            </p>
            {/* </div>
            </div> */}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
