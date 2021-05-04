import { useOffersContext } from '../../../context/offersContextController/OffersContextController';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-fetching-library';
import {
  getOffersAction,
} from '../../../api/actions/offerActions';
import { StatusCodes } from 'http-status-codes';
import { useTranslation } from 'next-i18next';

import SearchInput from './input/SearchInput';
import SalaryInput from './input/SalaryInput';
import Select from './input/Select';

const Filters = ({filtersData}) => {
  const offersContext = useOffersContext();

  const { t } = useTranslation('common');

  const [titleSearch, setTitleSearch] = useState('');
  const [professionsList, setProfessionsList] = useState(filtersData.professions);
  const [specializationsList, setSpecializationsList] = useState([]);
  const [locationsList, setLocationsList] = useState(filtersData.locations);

  const [selectedProfession, setSelectedProfession] = useState(null);
  const [selectedSpecialization, setSelectedSpecialization] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const [salaryFrom, setSalaryFrom] = useState(null);
  const [salaryTo, setSalaryTo] = useState(null);

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

  useEffect(() => {
    (async () => {
      await Promise.all([
        loadOffers(),
      ]);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if(selectedProfession) {
        setSpecializationsList(filtersData.specializations[selectedProfession] || [])
        setSelectedSpecialization(null)
      }
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

  return (
    <div className="flex flex-col justify-center px-3 h-16 shadow-md bg-primary">
      <form
        className="flex flex-wrap"
        onSubmit={(_) => {
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
          setValue={setSelectedLocation}
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
          setValue={setSelectedProfession}
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
          setValue={setSelectedSpecialization}
          label={t('specialization')}
        >
          {specializationsList.map(({ id, name }) => (
            <option key={`specialization-${id}`} value={id}>
              {name}
            </option>
          ))}
        </Select>
        <SalaryInput
          label={`${t('salary-from')}:`}
          value={salaryFrom}
          placeholder={t('salary-from')}
          setValue={setSalaryFrom}
        />
        <SalaryInput
          label={`${t('salary-to')}:`}
          value={salaryTo}
          placeholder={t('salary-to')}
          setValue={setSalaryTo}
        />
      </form>
    </div>
  );
};

export default Filters;
