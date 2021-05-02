import React, { useEffect } from 'react';
import Layout from '../ui/layout/Layout';
import { useOffersContext } from '../../context/offersContextController/OffersContextController';
import SingleOfferList from '../offer/SingleOfferList';
import { Select } from '../ui/Select';
import { FiltersStates } from '../../context/states';
import { useTranslation } from 'next-i18next';

import { offersMock } from '../app/offersMock';

const OfferList = () => {
  const offersContext = useOffersContext();
  const { t } = useTranslation('common');
  useEffect(() => {}, [offersContext.offersList]);
  console.log(offersContext.offersList);
  console.log(offersMock);

  return (
    <Layout offers={offersMock}>
      <div className="flex w-full py-2 justify-end items-center">
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
      <div className="flex px-2 flex-col">
        {offersContext.offersList.map((offer) => (
          <SingleOfferList offer={offer} />
        ))}
      </div>
    </Layout>
  );
};

export default OfferList;
