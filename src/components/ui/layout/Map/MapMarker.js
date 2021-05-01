import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import { Marker, Popup } from 'react-leaflet';

const MapMarker = ({ onMarkerShowDetailsClick, offer, location }) => {
  console.log(location);

  return (
    <Marker
      position={[location.coordinates.x, location.coordinates.y]}
      draggable={false}
      animate={true}
    >
      <Popup>
        <div className="flex">
          <div className="self-center mr-2">
            <img
              className="m-auto"
              style={{
                maxHeight: '100px',
                maxWidth: '100px',
              }}
              src={offer.company.logo_file_path}
            />
          </div>
          <div className="flex flex-col ml-2">
            <span className="block my-1 font-bold text-lg leading-5">
              {offer.title}
            </span>
            <hr />
            <span className="block my-1 font-bold">{offer.company.name}</span>
            <address>{`${location.street}, ${location.city}`}</address>
            <span className="block my-1 flex-grow font-bold text-lg">
              {`${offer.salary_from} - ${offer.salary_to} PLN`}
            </span>
          </div>
        </div>
        <div>
          <button
            className="block w-full bg-blue-600 hover:bg-blue-800 text-white font-bold p-1 rounded"
            onClick={() => {
              onMarkerShowDetailsClick(offer.id);
            }}
          >
            {/* TODO: it should be imported from translations */}
            Show details
          </button>
        </div>
      </Popup>
    </Marker>
  );
};

export default MapMarker;
