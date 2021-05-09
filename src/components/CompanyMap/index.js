import { useEffect } from 'react';
import { useCompaniesContext } from '../../context/CompaniesContextController';
import Map from '../ui/Map';
import CompanyMarker from './CompanyMarker';

function CompanyMap({ company, hidePopups }) {
  const companiesContext = useCompaniesContext();

  const list = companiesContext.companiesList.length
    ? companiesContext.companiesList
    : company
    ? [company]
    : [];
  const markers = list.map((entity) =>
    entity.locations.map((location) => (
      <CompanyMarker
        key={`marker-company-${entity.id}-${location.id}`}
        location={location}
        company={!hidePopups && entity}
      />
    ))
  );
  let bounds = list.map((entity) =>
    entity.locations.map((location) => [location.coordinates.x, location.coordinates.y])
  );

  return <Map markers={markers} bounds={bounds} />;
}

export default CompanyMap;
