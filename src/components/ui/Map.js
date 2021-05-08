import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import { MapContainer, TileLayer } from 'react-leaflet';

const defaultBounds = [
  [53.948, 14.56],
  [53.948, 14.56],
  [49.116, 22.516],
];

const Map = ({ markers, bounds }) => {
  return (
    <div className="w-full h-full">
      <MapContainer
        bounds={bounds || defaultBounds}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          className="z-10"
        />
        {markers}
      </MapContainer>
    </div>
  );
};

export default Map;
