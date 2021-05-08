import { useEffect } from 'react';
import { useOffersContext } from '../../context/offersContextController/OffersContextController';
import { FiltersStates } from '../../context/states';
import { useTranslation } from 'next-i18next';

import OfferCard from './OfferCard';
import Select from '../ui/forms/Select';
import NoResults from '../ui/NoResults';

const OfferList = () => {
  const offersContext = useOffersContext();
  const { t } = useTranslation('common');

  useEffect(() => {}, [offersContext.offersList]);

  return (
    <div className="flex flex-grow w-full overflow-hidden">
      <div className="w-full">
        <div className="flex w-full p-2 justify-end items-center px-4">
          <div className="mr-4">{t('sort-by')}:</div>
          <div className="">
            <Select
              value={offersContext.order}
              onChange={(e) => offersContext.setOrder(e.target.value)}
              options={Object.values(FiltersStates).map((filter) => ({
                label: t(filter),
                value: filter,
              }))}
            ></Select>
          </div>
        </div>
        <div className="flex px-4 flex-col">
          {offersContext && offersContext.length ? (
            offersContext.offersList.map((offer, key) => <OfferCard offer={offer} key={key} />)
          ) : (
            <NoResults message={t('noOffers')} />
          )}
        </div>
      </div>
    </div>
  );
};

export default OfferList;
