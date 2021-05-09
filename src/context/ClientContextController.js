import { ClientContextProvider, createClient } from 'react-fetching-library';
import React, { useMemo } from 'react';
import { config } from '../config';
import { requestHostInterceptor } from '../api/interceptors/requestHostInterceptor/RequestHostInterceptor';
import { requestQueryInterceptor } from '../api/interceptors/requestQueryInterceptor/RequestQueryInterceptor';

const baseUrl = config.api.url;
export const FetchClient = createClient({
  requestInterceptors: [requestHostInterceptor(baseUrl), requestQueryInterceptor()],
});

export const ClientContextController = ({ children }) => {
  const client = useMemo(() => FetchClient, []);

  return <ClientContextProvider client={client}>{children}</ClientContextProvider>;
};
