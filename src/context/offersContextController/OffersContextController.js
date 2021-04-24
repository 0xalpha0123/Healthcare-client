import React, { createContext, useContext, useState } from "react";

const OffersContext = createContext({
  offersList: [],
  setOffersList: null,
});

export const OffersContextController = ({ children }) => {
  const [offersList, setOffersList] = useState([]);

  return (
    <OffersContext.Provider
      value={{
        offersList,
        setOffersList,
      }}
    >
      {children}
    </OffersContext.Provider>
  );
};

export function useOffersContext() {
  return useContext(OffersContext);
}
