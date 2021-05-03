import React from 'react';
import 'tailwindcss/tailwind.css';
import { appWithTranslation } from 'next-i18next';
import { ClientContextController } from '../src/context/clientContextController/ClientContextController';
import App from "next/app";
import 'isomorphic-unfetch';

function MyApp({ Component, pageProps }) {
  return (
    <ClientContextController>
        <Component {...pageProps} />
    </ClientContextController>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  return {
    ...appProps
  }
}

export default appWithTranslation(MyApp);
