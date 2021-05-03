export function getCompaniesAction() {
  return {
    method: 'GET',
    endpoint: '/companies',
  };
}

export function getUniqueLocations() {
  return {
    method: 'GET',
    endpoint: '/companies/locations',
  };
}
