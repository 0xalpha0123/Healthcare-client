import { useRouter } from 'next/router';
import { useQuery } from 'react-fetching-library';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Layout from '../../src/components/ui/layout/Layout';
import OfferDetails from '../../src/components/OfferDetails/index.js';
import { getOfferAction } from '../../src/api/actions/offerActions';

import { offersMock } from '../../src/components/app/offersMock';

export default function Home() {
  const router = useRouter();
  const { offerId } = router.query;
  // TODO: invalid server response atm
  const { payload } = useQuery(getOfferAction({ id: offerId }));

  const offer = offersMock[0];

  return (
    <Layout offers={[offer]}>
      <OfferDetails offer={offer} />
    </Layout>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
