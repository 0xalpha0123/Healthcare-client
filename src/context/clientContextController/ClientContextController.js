import { ClientContextProvider, createClient } from "react-fetching-library";
import React, { useMemo } from "react";
import { config } from "../../config";
import { requestHostInterceptor } from "../../api/interceptors/requestHostInterceptor/RequestHostInterceptor";
import { requestQueryInterceptor } from "../../api/interceptors/requestQueryInterceptor/RequestQueryInterceptor";

export const ClientContextController = ({ children }) => {
  const baseUrl = config.api.url;

  const client = useMemo(
    () =>
      createClient({
        requestInterceptors: [
          requestHostInterceptor(baseUrl),
          requestQueryInterceptor(),
        ],
      }),
    []
  );

  return (
    <ClientContextProvider client={client}>{children}</ClientContextProvider>
  );
};
