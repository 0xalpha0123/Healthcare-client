import qs from "query-string";

export const requestQueryInterceptor = () => () => async (action) => {
  if (action.query) {
    const { query, ...otherActionParams } = action;

    return {
      ...otherActionParams,
      endpoint: `${action.endpoint}?${qs
        .stringify(query, {skipNull: true, skipEmptyString: true})
        .replace(/%20/g, "+")}`,
    };
  }

  return action;
};
