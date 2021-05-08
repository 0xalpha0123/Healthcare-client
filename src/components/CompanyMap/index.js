import Map from '../ui/Map';
import CompanyMarker from './CompanyMarker';

function CompanyMap({ companies }) {
  const markers = companies.map((entity) =>
    entity.locations.map((location) => (
      <CompanyMarker
        key={`marker-company-${entity.id}-${location.id}`}
        location={location}
        company={entity}
      />
    ))
  );

  const bounds = companies.map((entity) =>
    entity.locations.map((location) => [location.coordinates.x, location.coordinates.y])
  );

  return <Map markers={markers} bounds={bounds} />;
}

export default CompanyMap;
