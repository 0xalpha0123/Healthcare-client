import React from 'react';
import 'tailwindcss/tailwind.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { appWithTranslation } from 'next-i18next';
import { ClientContextController } from '../src/context/clientContextController/ClientContextController';
import 'isomorphic-unfetch';

function MyApp({ Component, pageProps }) {
  return (
    <ClientContextController>
        <Component {...pageProps} />
    </ClientContextController>
  );
}

export default appWithTranslation(MyApp);
