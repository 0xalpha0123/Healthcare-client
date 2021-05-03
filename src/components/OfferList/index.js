import { useEffect } from 'react';
import { useOffersContext } from '../../context/offersContextController/OffersContextController';
import { FiltersStates } from '../../context/states';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';

import Layout from '../ui/layout/Layout';
import OfferCard from './OfferCard';
import Select from '../ui/layout/input/Select';

const OfferList = () => {
  const Map = dynamic(() => import('../ui/layout/Map/'), { ssr: false });

  const offersContext = useOffersContext();
  useEffect(() => {}, [offersContext.offersList]);

  const { t } = useTranslation('common');

  return (
    <Layout filters={true}>
      <div className="w-full overflow-scroll">
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
      </div>
      <div className="w-full">
        <Map
          // onMarkerShowDetailsClick={onMarkerShowDetailsClick}
          offers={offersContext.offersList}
        />
      </div>
    </Layout>
  );
};

export default OfferList;
