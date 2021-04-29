import React, { useEffect } from 'react';
import Layout from '../ui/layout/Layout';
import { useOffersContext } from '../../context/offersContextController/OffersContextController';
import { SingleOfferList } from '../offer/SingleOfferList';
import { OfferDetails } from '../offer/OfferDetails';
import dynamic from 'next/dynamic';

import { offersMock } from './offersMock.js';

import { useQuery } from 'react-fetching-library';
import { getOfferAction } from '../../api/actions/offerActions';

const OfferList = () => {
  // mock offers
  const offers = offersMock.slice(0, -1);
  const Map = dynamic(() => import('./Map'), { ssr: false });

  const offersContext = useOffersContext();
  useEffect(() => {}, [offersContext.offersList]);

  const onMarkerShowDetailsClick = (event) => {
    console.log(event);
  };

  return (
    <Layout>
      <div className="fixed px-4 h-10 bg-white w-full">sort by</div>
      <div className="flex mx-2 flex-col pt-8">
        {offersContext.offersList.map((offer) => (
          <SingleOfferList offer={offer} />
        ))}
      </div>
      <div style={{ height: 500, width: '100%' }} py={4}>
        <Map
          onMarkerShowDetailsClick={onMarkerShowDetailsClick}
          offers={offers}
        />
      </div>
    </Layout>
  );
};

export default OfferList;
