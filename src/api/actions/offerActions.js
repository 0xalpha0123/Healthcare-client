export function getAgreementTypesAction() {
  return {
    method: 'GET',
    endpoint: '/offers/agreement-types',
  };
}

export function getOffersAction({
  title,
  professionId,
  specializationId,
  city,
  salaryFrom,
  salaryTo,
                                  order,
}) {
  return {
    method: 'GET',
    endpoint: '/offers',
    query: {
      title,
      profession_id: professionId,
      specialization_id: specializationId,
      city,
      salary_to: salaryTo,
      salary_from: salaryFrom,
      order,
    },
  };
}

export function getOfferAction({ id }) {
  return {
    method: 'GET',
    endpoint: `/offers/${id}`,
  };
}

export function getProfessionsAction() {
  return {
    method: 'GET',
    endpoint: '/offers/professions',
  };
}

export function getSpecializationsAction({ professionId }) {
  return {
    method: 'GET',
    endpoint: '/offers/specializations',
    query: { profession_id: professionId },
  };
}
