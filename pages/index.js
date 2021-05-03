import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import OfferList from '../src/components/OfferList';

export default function Home() {
  return <OfferList />;
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['filters', 'offers'])),
  },
});
