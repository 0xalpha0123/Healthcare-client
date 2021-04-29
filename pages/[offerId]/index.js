import { useRouter } from 'next/router';
import { useQuery } from 'react-fetching-library';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Layout from '../../src/components/ui/layout/Layout';
import OfferDetails from '../../src/components/offer/OfferDetails';
import { getOfferAction } from '../../src/api/actions/offerActions';

export default function Home() {
  const router = useRouter();
  const { offerId } = router.query;
  const { payload } = useQuery(getOfferAction({ id: offerId }));

  return (
    <Layout>
      <OfferDetails offer={payload} />
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
