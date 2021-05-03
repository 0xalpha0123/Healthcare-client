import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import OfferList from '../src/components/OfferList';
import { OffersContextController } from "../src/context/offersContextController/OffersContextController";

export default function Home() {
  return (
      <OffersContextController>
        <OfferList />
      </OffersContextController>
      );
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
};
