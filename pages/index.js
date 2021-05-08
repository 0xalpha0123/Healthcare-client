import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import OfferList from '../src/components/OfferList';
import { OffersContextController } from '../src/context/offersContextController/OffersContextController';
import { FetchClient } from '../src/context/clientContextController/ClientContextController';
import {
  getOffersAction,
  getProfessionsAction,
  getSpecializationsAction,
} from '../src/api/actions/offerActions';
import { getUniqueLocations } from '../src/api/actions/companyActions';
import dynamic from 'next/dynamic';

import Filters from '../src/components/ui/layout/Filters';

export default function Home({ offers, filtersData }) {
  const Map = dynamic(() => import('../src/components/ui/layout/Map/'), {
    ssr: false,
  });

  return (
    <OffersContextController offers={offers}>
      <div className="flex flex-col w-full h-full">
        <Filters filtersData={filtersData} />
        <div className="flex w-full overflow-hidden">
          <OfferList filtersData={filtersData} />
          <Map data={offers} type="offer" />
        </div>
      </div>
    </OffersContextController>
  );
}

export const getServerSideProps = async (ctx) => {
  const { payload: offersPayload } = await FetchClient.query(getOffersAction({}));
  const { payload: specializationsPayload } = await FetchClient.query(getSpecializationsAction({}));
  const { payload: locationsPayload } = await FetchClient.query(getUniqueLocations({}));
  const { payload: professionsPayload } = await FetchClient.query(getProfessionsAction({}));

  const groupBy = (key) => (array) =>
    array.reduce((objectsByKeyValue, obj) => {
      const value = obj[key];
      objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
      return objectsByKeyValue;
    }, {});

  const filtersData = {
    specializations: groupBy('profession_id')(specializationsPayload),
    professions: professionsPayload,
    locations: locationsPayload,
  };

  return {
    props: {
      ...(await serverSideTranslations(ctx.locale, ['common'])),
      offers: offersPayload,
      filtersData,
    },
  };
};
