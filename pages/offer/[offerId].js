import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';

import { FetchClient } from '../../src/context/ClientContextController';
import { getOfferAction } from '../../src/api/actions/offerActions';
import OfferDetails from '../../src/components/OfferDetails/index.js';

export default function Home({ offer }) {
  const OfferMap = dynamic(() => import('../../src/components/OfferMap'), {
    ssr: false,
  });

  return (
    <div className="flex w-full h-full">
      <div className="w-full">
        <OfferDetails offer={offer} />
      </div>
      <div className=" w-full ml-1 hidden md:block">
        <OfferMap offer={offer} hidePopups />
      </div>
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const { payload } = await FetchClient.query(getOfferAction({ id: ctx.query.offerId }));

  return {
    props: {
      ...(await serverSideTranslations(ctx.locale, ['common'])),
      offer: payload,
    },
  };
};
