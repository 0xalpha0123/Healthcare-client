import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import OfferDetails from '../../src/components/OfferDetails/index.js';

export default function Home() {
  const router = useRouter();
  const { offerId } = router.query;

  return <OfferDetails offerId={offerId} />;
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['offers'])),
  },
});
