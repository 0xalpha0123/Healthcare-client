import React, { useEffect, useState } from "react";
import Layout from "../ui/layout/Layout";
import { useOffersContext } from "../../context/offersContextController/OffersContextController";
import { SingleOfferList } from "../offer/SingleOfferList";

const OfferList = () => {
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
