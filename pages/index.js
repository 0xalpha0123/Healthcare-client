import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import { OffersContextController } from '../src/context/OffersContextController';
import { FetchClient } from '../src/context/ClientContextController';
import {
  getOffersAction,
  getProfessionsAction,
  getSpecializationsAction,
} from '../src/api/actions/offerActions';
import { getUniqueLocations } from '../src/api/actions/companyActions';
import OfferList from '../src/components/OfferList';
import Filters from '../src/components/OfferList/Filters';

export default function Home({ offers, filtersData }) {
  const OfferMap = dynamic(() => import('../src/components/OfferMap'), {
    ssr: false,
  });

  return (
    <OffersContextController offers={offers}>
      <div className="h-full">
        <div className="md:h-1/6">
          <Filters filtersData={filtersData} />
        </div>
        <div className="flex w-full md:h-5/6 pt-4 md:pt-0">
          <OfferList filtersData={filtersData} />
          <div className="w-full hidden md:block">
            <OfferMap />
          </div>
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
