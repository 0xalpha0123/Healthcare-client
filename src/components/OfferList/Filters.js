import { useOffersContext } from '../../context/offersContextController/OffersContextController';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-fetching-library';
import { getOffersAction } from '../../api/actions/offerActions';
import { StatusCodes } from 'http-status-codes';
import { useTranslation } from 'next-i18next';
import Input from '../ui/forms/Input';
import Select from '../ui/forms/Select';
import Card from '../ui/Card';

const Filters = ({ filtersData }) => {
  const offersContext = useOffersContext();

  const { t } = useTranslation('common');

  const [titleSearch, setTitleSearch] = useState('');
  const [professionsList, setProfessionsList] = useState(filtersData.professions);
  const [specializationsList, setSpecializationsList] = useState([]);
  const [locationsList, setLocationsList] = useState(filtersData.locations);

  const [selectedProfession, setSelectedProfession] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const [salaryFrom, setSalaryFrom] = useState('');
  const [salaryTo, setSalaryTo] = useState('');

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
      await Promise.all([loadOffers()]);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (selectedProfession) {
        setSpecializationsList(filtersData.specializations[selectedProfession] || []);
        setSelectedSpecialization(null);
      }
    })();
  }, [selectedProfession]);

  useEffect(() => {
    (async () => {
      await Promise.all([loadOffers()]);
    })();
  }, [selectedProfession, selectedSpecialization, selectedLocation, offersContext.order]);

  const loadOffers = async () => {
    const { payload, status } = await getOffersQuery();
    if (status === StatusCodes.OK) {
      offersContext.setOffersList(payload);
    }
  };

  return (
    <Card className="m-auto">
      <form
        className="flex flex-wrap md:justify-center"
        onSubmit={(_) => {
          loadOffers();
        }}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            loadOffers();
          }
        }}
      >
        <div className="w-full sm: w-1/2 md:w-3/12 p-2">
          <Input
            value={titleSearch}
            setValue={setTitleSearch}
            placeholder={t('search')}
            label={t('title')}
            onClear
          />
        </div>
        <div className="w-full sm: w-1/2 md:w-2/12 p-2">
          <Select
            value={selectedLocation}
            onClear={true}
            setValue={setSelectedLocation}
            label={t('location')}
            options={locationsList.map(({ city }) => ({ label: city, value: city }))}
          ></Select>
        </div>
        <div className="w-full sm: w-1/2 md:w-2/12 p-2">
          <Select
            value={selectedProfession}
            onClear={true}
            setValue={setSelectedProfession}
            label={t('profession')}
            options={professionsList.map(({ id, name }) => ({ label: name, value: id }))}
          ></Select>
        </div>
        <div className="w-full sm: w-1/2 md:w-2/12 p-2">
          <Select
            value={selectedSpecialization}
            onClear={true}
            setValue={setSelectedSpecialization}
            label={t('specialization')}
            options={specializationsList.map(({ id, name }) => ({ label: name, value: id }))}
          ></Select>
        </div>
        <div className="w-full sm: w-1/2 md:w-2/12 p-2 ">
          <div className="text-center pb-1 text-xs">{t('salary')}</div>
          <div className="flex">
            <div className="w-1/2">
              <Input
                value={salaryFrom}
                placeholder={t('to')}
                setValue={setSalaryFrom}
                type="number"
              />
            </div>
            <div className="w-1/2">
              <Input
                value={salaryTo}
                placeholder={t('from')}
                setValue={setSalaryTo}
                type="number"
              />
            </div>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default Filters;
