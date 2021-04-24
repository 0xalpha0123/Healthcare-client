import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import Layout from "./layout/Layout";
import { useOffersContext } from "../context/offersContextController/OffersContextController";
import { SingleOfferList } from "./offer/SingleOfferList";

const OfferList = () => {
  const { t } = useTranslation("common");

  const offersContext = useOffersContext();

  useEffect(() => {}, [offersContext.offersList]);

  return (
    <Layout>
      <div className="flex mx-2 flex-col">
        {offersContext.offersList.map((offer) => (
          <SingleOfferList offer={offer} />
        ))}
      </div>
    </Layout>
  );
};

export default OfferList;
