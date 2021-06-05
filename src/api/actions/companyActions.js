export function getCompaniesAction({ city, name }) {
  return {
    method: 'GET',
    endpoint: '/companies',
    query: {
      name,
      city,
    },
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
