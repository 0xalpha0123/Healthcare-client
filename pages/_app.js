import React from 'react';
import 'tailwindcss/tailwind.css';
import { appWithTranslation } from 'next-i18next';
import { ClientContextController } from '../src/context/clientContextController/ClientContextController';
import { OffersContextController } from '../src/context/offersContextController/OffersContextController';

function MyApp({ Component, pageProps }) {
  return (
    <ClientContextController>
      <OffersContextController>
        <Component {...pageProps} />
      </OffersContextController>
    </ClientContextController>
  );
}

export default appWithTranslation(MyApp);
