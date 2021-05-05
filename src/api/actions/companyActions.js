export function getCompaniesAction() {
  return {
    method: 'GET',
    endpoint: '/companies',
  };
}

export function getCompanyByIdAction({ id }) {
  return {
    method: 'GET',
    endpoint: `/companies/${id}`,
  };
}

export function getUniqueLocations() {
  return {
    method: 'GET',
    endpoint: '/companies/locations',
  };
}
