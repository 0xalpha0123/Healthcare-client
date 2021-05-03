import { useEffect } from 'react';
import { useOffersContext } from '../../context/offersContextController/OffersContextController';
import { FiltersStates } from '../../context/states';
import { useTranslation } from 'next-i18next';

import Layout from '../ui/layout/Layout';
import OfferCard from './OfferCard';
import Select from '../ui/layout/input/Select';
import { FetchClient } from "../../context/clientContextController/ClientContextController";
import { getOffersAction } from "../../api/actions/offerActions";

const OfferList = ({test}) => {
  const offersContext = useOffersContext();
  const { t } = useTranslation('common');

  useEffect(() => {
  }, [offersContext.offersList]);

  return (
    <Layout offers={offersContext.offersList} filters={true}>
      <div className="flex w-full p-2 justify-end items-center">
        {t('sort-by')}:
        <Select
          value={offersContext.order}
          onChange={(e) => offersContext.setOrder(e.target.value)}
        >
          {Object.values(FiltersStates).map((filter) => (
            <option key={`state-${filter}`} value={filter}>
              {t(filter)}
            </option>
          ))}
        </Select>
      </div>
      <div className="flex px-4 flex-col">
        {offersContext.offersList.map((offer) => (
          <OfferCard offer={offer} />
        ))}
      </div>
    </Layout>
  );
};

OfferList.getInitialProps = async () => {
    await FetchClient.query(getOffersAction());
    return {}
}

export default OfferList;
