import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import OfferDetails from '../../src/components/OfferDetails/index.js';
import { getOfferAction } from "../../src/api/actions/offerActions";
import { FetchClient } from "../../src/context/clientContextController/ClientContextController";

export default function Home({offer}) {
  return <OfferDetails offer={offer} />;
}

export const getServerSideProps = async (ctx) => {

  const { payload } =  await FetchClient.query(getOfferAction({ id: ctx.query.offerId }));

  return {
    props: {
      ...(await serverSideTranslations(ctx.locale, ['common'])),
      offer: payload
    },
  }
};
