import { useOffersContext } from '../../../context/offersContextController/OffersContextController';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-fetching-library';
import {
  getOffersAction,
  getProfessionsAction,
  getSpecializationsAction,
} from '../../../api/actions/offerActions';
import { StatusCodes } from 'http-status-codes';
import { getUniqueLocations } from '../../../api/actions/companyActions';
import { useTranslation } from 'next-i18next';

import SearchInput from './input/SearchInput';
import SalaryInput from './input/SalaryInput';
import Select from './input/Select';

const Filters = () => {
  const offersContext = useOffersContext();

  const { t } = useTranslation('common');

  const [titleSearch, setTitleSearch] = useState('');
  const [professionsList, setProfessionsList] = useState([]);
  const [specializationsList, setSpecializationsList] = useState([]);
  const [locationsList, setLocationsList] = useState([]);

  const [selectedProfession, setSelectedProfession] = useState(null);
  const [selectedSpecialization, setSelectedSpecialization] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const [salaryFrom, setSalaryFrom] = useState(0);
  const [salaryTo, setSalaryTo] = useState(20000);

  const { query: getOffersQuery } = useQuery(
    getOffersAction({
      title: titleSearch,
      professionId: selectedProfession,
      specializationId: selectedSpecialization,
      city: selectedLocation,
      salaryFrom,
      salaryTo,
      order: offersContext.order,
    }),
    false
  );
  const { query: getProfessionsQuery } = useQuery(
    getProfessionsAction(),
    false
  );
  const { query: getSpecializationsQuery } = useQuery(
    getSpecializationsAction({ professionId: selectedProfession }),
    false
  );

  const { query: getLocationsQuery } = useQuery(getUniqueLocations(), false);

  useEffect(() => {
    (async () => {
      await Promise.all([
        loadOffers(),
        loadProfessionsFilters(),
        loadSpecializationsFilters(),
        loadLocationsFilters(),
      ]);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      await Promise.all([loadSpecializationsFilters()]);
    })();
  }, [selectedProfession]);

  useEffect(() => {
    (async () => {
      await Promise.all([loadOffers()]);
    })();
  }, [
    selectedProfession,
    selectedSpecialization,
    selectedLocation,
    offersContext.order,
  ]);

  const loadOffers = async () => {
    const { payload, status } = await getOffersQuery();
    if (status === StatusCodes.OK) {
      offersContext.setOffersList(payload);
    }
  };

  const loadProfessionsFilters = async () => {
    const { payload, status } = await getProfessionsQuery();
    if (status === StatusCodes.OK) {
      setProfessionsList(payload);
    }
  };

  const loadSpecializationsFilters = async () => {
    if (!selectedProfession) {
      return;
    }

    const { payload, status } = await getSpecializationsQuery();
    if (status === StatusCodes.OK) {
      setSpecializationsList(payload);
      setSelectedSpecialization(null);
    }
  };

  const loadLocationsFilters = async () => {
    const { payload, status } = await getLocationsQuery();
    if (status === StatusCodes.OK) {
      setLocationsList(payload);
    }
  };

  return (
    <div className="flex flex-col justify-center px-3 h-16 shadow-md bg-primary">
      <form
        className="flex flex-wrap"
        onSubmit={(e) => {
          loadOffers();
        }}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            loadOffers();
          }
        }}
      >
        <SearchInput
          value={titleSearch}
          setValue={setTitleSearch}
          placeholder={t('search')}
        />
        <Select
          value={selectedLocation}
          onClear={true}
          onChange={(e) => {
            setSelectedLocation(e.target.value);
          }}
          label={t('location')}
        >
          {locationsList.map(({ city }) => (
            <option key={`location-${city}`} value={city}>
              {city}
            </option>
          ))}
        </Select>
        <Select
          value={selectedProfession}
          onClear={true}
          onChange={(e) => {
            setSelectedProfession(e.target.value);
          }}
          label={t('profession')}
        >
          {professionsList.map(({ id, name }) => (
            <option key={`profession-${id}`} value={id}>
              {name}
            </option>
          ))}
        </Select>
        <Select
          value={selectedSpecialization}
          onClear={true}
          onChange={(e) => {
            e.preventDefault();
            setSelectedSpecialization(e.target.value);
          }}
          label={t('specialization')}
        >
          {specializationsList.map(({ id, name }) => (
            <option key={`specialization-${id}`} value={id}>
              {name}
            </option>
          ))}
        </Select>
        <SalaryInput
          label={`${t('salaryFrom')}:`}
          value={salaryFrom}
          placeholder={t('salaryFrom')}
          setValue={setSalaryFrom}
        />
        <SalaryInput
          label={`${t('salaryTo')}:`}
          value={salaryTo}
          placeholder={t('salaryTo')}
          setValue={setSalaryTo}
        />
      </form>
    </div>
  );
};

export default Filters;
