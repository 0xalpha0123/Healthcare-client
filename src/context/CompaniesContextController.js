import React, { createContext, useContext, useState } from 'react';

const CompaniesContext = createContext({
  companiesList: [],
  setCompaniesList: null,
});

export const CompaniesContextController = ({ children, companies }) => {
  const [companiesList, setCompaniesList] = useState(companies);

  return (
    <CompaniesContext.Provider
      value={{
        companiesList,
        setCompaniesList,
      }}
    >
      {children}
    </CompaniesContext.Provider>
  );
};

export function useCompaniesContext() {
  return useContext(CompaniesContext);
}
