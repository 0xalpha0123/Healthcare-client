import React, { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import Layout from './layout/Layout';
import { useOffersContext } from '../context/offersContextController/OffersContextController';
import { SingleOfferList } from './offer/SingleOfferList';
import dynamic from 'next/dynamic';

import { offersMock } from './offersMock.js';

const OfferList = () => {
  const offers = offersMock.slice(0, -1);

  const Map = dynamic(() => import('./Map'), { ssr: false });
  const { t } = useTranslation('common');

  const offersContext = useOffersContext();

  useEffect(() => {}, [offersContext.offersList]);

  return (
    <Layout>
      <div className="flex mx-2 flex-col">
        {offersContext.offersList.map((offer) => (
          <SingleOfferList offer={offer} />
        ))}
      </div>
      <div style={{ height: 500, width: '100%' }} py={4}>
        <Map offers={offers} />
      </div>
    </Layout>
  );
};

export default OfferList;
