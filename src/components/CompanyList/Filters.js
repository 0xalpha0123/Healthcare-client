import { useCompaniesContext } from '../../context/CompaniesContextController';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-fetching-library';
import { getCompaniesAction } from '../../api/actions/companyActions';
import { StatusCodes } from 'http-status-codes';
import { useTranslation } from 'next-i18next';
import Input from '../ui/forms/Input';
import Select from '../ui/forms/Select';
import Card from '../ui/Card';

const Filters = ({ locations }) => {
  const companiesContext = useCompaniesContext();

  const { t } = useTranslation('common');

  const [nameSearch, setNameSearch] = useState('');
  const [locationsList, setLocationsList] = useState(locations);
  const [selectedLocation, setSelectedLocation] = useState('');

  const { query: getCompaniesQuery } = useQuery(
    getCompaniesAction({
      name: nameSearch,
      city: selectedLocation,
    }),
    false
  );

  useEffect(() => {
    (async () => {
      await Promise.all([loadCompanies()]);
    })();
  }, [selectedLocation]);

  const loadCompanies = async () => {
    const { payload, status } = await getCompaniesQuery();
    if (status === StatusCodes.OK) {
      companiesContext.setCompaniesList(payload);
    }
  };

  return (
    <Card className="m-auto">
      <form
        className="flex flex-wrap justify-center md:justify-start"
        onSubmit={(e) => {
          e.preventDefault();
          loadCompanies();
        }}
      >
        <div className="w-full sm: w-1/2 md:w-3/12 p-2">
          <Input
            value={nameSearch}
            setValue={setNameSearch}
            placeholder={t('search')}
            label={t('companyName')}
            onBlur={loadCompanies}
            onClear
          />
        </div>
        <div className="w-full sm: w-1/2 md:w-2/12 p-2">
          <Select
            value={selectedLocation}
            onClear
            setValue={setSelectedLocation}
            label={t('location')}
            options={locationsList.map(({ city }) => ({ label: city, value: city }))}
          ></Select>
        </div>
      </form>
    </Card>
  );
};

export default Filters;
