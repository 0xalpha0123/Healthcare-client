import React from 'react';
import 'tailwindcss/tailwind.css';
import { appWithTranslation } from 'next-i18next';
import { ClientContextController } from '../src/context/clientContextController/ClientContextController';
import 'isomorphic-unfetch';

import Layout from '../src/components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <ClientContextController>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ClientContextController>
  );
}

export default appWithTranslation(MyApp);
