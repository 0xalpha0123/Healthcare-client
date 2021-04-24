export const requestHostInterceptor = (host) => () => async (action) => {
  if (action.endpoint.startsWith("http") || action.endpoint.startsWith("//")) {
    return action;
  }

  return {
    ...action,
    endpoint: `${host}${action.endpoint}`,
  };
};
