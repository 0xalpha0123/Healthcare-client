import React, { useEffect } from 'react';
import Layout from '../ui/layout/Layout';
import { useOffersContext } from '../../context/offersContextController/OffersContextController';
import { SingleOfferList } from '../offer/SingleOfferList';

import { offersMock } from './offersMock.js';

const OfferList = () => {
  // mock offers
  const offers = offersMock.slice(0, -1);

  const offersContext = useOffersContext();
  useEffect(() => {}, [offersContext.offersList]);

  return (
    <Layout offers={offers}>
      <div className="fixed px-4 h-10 bg-white w-full">sort by</div>
      <div className="flex mx-2 flex-col pt-8">
        {offers.map((offer) => (
          <SingleOfferList offer={offer} />
        ))}
      </div>
    </Layout>
  );
};

export default OfferList;
