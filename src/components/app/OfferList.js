import React, { useEffect } from 'react';
import Layout from '../ui/layout/Layout';
import { useOffersContext } from '../../context/offersContextController/OffersContextController';
import { SingleOfferList } from '../offer/SingleOfferList';
import { Select } from '../ui/Select';
import { FiltersStates } from '../../context/states';
import { useTranslation } from 'next-i18next';

import { offersMock } from './offersMock.js';

const OfferList = () => {
  // mock offers
  const offers = offersMock.slice(0, -1);

  const offersContext = useOffersContext();
  const { t } = useTranslation('common');
  useEffect(() => {}, [offersContext.offersList]);

  return (
    <Layout offers={offersContext.offersList}>
      <div className="fixed flex px-4 h-10 bg-white w-full">
        <Select
          value={offersContext.order}
          onChange={(e) => offersContext.setOrder(e.target.value)}
        >
          {Object.values(FiltersStates).map((f) => (
            <option key={`state-${f}`} value={f}>
              {t(f)}
            </option>
          ))}
        </Select>
      </div>
      <div className="flex mx-2 flex-col pt-8">
        {offersContext.offersList.map((offer) => (
          <SingleOfferList offer={offer} />
        ))}
      </div>
    </Layout>
  );
};

export default OfferList;
