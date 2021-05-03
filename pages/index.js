import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import OfferList from '../src/components/OfferList';
import {
    OffersContextController,
} from "../src/context/offersContextController/OffersContextController";
import { FetchClient } from "../src/context/clientContextController/ClientContextController";
import { getOffersAction } from "../src/api/actions/offerActions";

export default function Home({offers}) {

  return (
      <OffersContextController offers={offers}>
        <OfferList  />
      </OffersContextController>
      );
}

export const getServerSideProps = async (ctx) => {
    const {payload: offersPayload} = await FetchClient.query(getOffersAction({}))

    return {
        props: {
            ...(await serverSideTranslations(ctx.locale, ['common'])),
            offers: offersPayload
        },
    }
};

