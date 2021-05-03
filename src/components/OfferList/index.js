import { useEffect } from 'react';
import { useOffersContext } from '../../context/offersContextController/OffersContextController';
import { FiltersStates } from '../../context/states';
import { useTranslation } from 'next-i18next';

import Layout from '../ui/layout/Layout';
import OfferCard from './OfferCard';
import Select from '../ui/layout/input/Select';

const OfferList = () => {
  const offersContext = useOffersContext();
  const { t } = useTranslation('offers');
  useEffect(() => {}, [offersContext.offersList]);

  return (
    <Layout offers={offersContext.offersList} filters={true}>
      <div className="flex w-full p-2 justify-end items-center">
        {t('sort_by')}:
        <Select
          value={offersContext.order}
          onChange={(e) => offersContext.setOrder(e.target.value)}
        >
          {Object.values(FiltersStates).map((filter) => (
            <option key={`state-${filter}`} value={filter}>
              {t(filter)}
            </option>
          ))}
        </Select>
      </div>
      <div className="flex px-4 flex-col">
        {offersContext.offersList.map((offer) => (
          <OfferCard offer={offer} />
        ))}
      </div>
    </Layout>
  );
};

export default OfferList;
