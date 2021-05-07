import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';

import { FetchClient } from '../../src/context/clientContextController/ClientContextController';
import { getOfferAction } from '../../src/api/actions/offerActions';
import OfferDetails from '../../src/components/OfferDetails/index.js';

export default function Home({ offer }) {
  const Map = dynamic(() => import('../../src/components/ui/layout/Map/'), {
    ssr: false,
  });

  return (
    <div className="flex w-full">
      <OfferDetails offer={offer} />
      <Map data={[offer]} type={'offer'} />
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const { payload } = await FetchClient.query(
    getOfferAction({ id: ctx.query.offerId })
  );

  return {
    props: {
      ...(await serverSideTranslations(ctx.locale, ['common'])),
      offer: payload,
    },
  };
};
