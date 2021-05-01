import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import { Marker, Popup } from 'react-leaflet';

const MapMarker = ({ onMarkerShowDetailsClick, offer, location }) => {
  return (
    <Marker
      position={[location.coordinates.x, location.coordinates.y]}
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
  );
};

export default MapMarker;
