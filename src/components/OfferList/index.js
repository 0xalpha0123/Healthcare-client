import { useEffect } from 'react';
import { useOffersContext } from '../../context/OffersContextController';
import { FiltersStates } from '../../context/states';
import { useTranslation } from 'next-i18next';

import OfferCard from './OfferCard';
import Select from '../ui/forms/Select';
import NoResults from '../ui/NoResults';

import classes from './custom.module.css';

const OfferList = () => {
  const offersContext = useOffersContext();
  const { t } = useTranslation('common');

  useEffect(() => {}, [offersContext.offersList]);

  return (
    <div className={classes.list}>
      <div className="w-full ">
        <div className="flex w-full justify-end items-center px-4 mb-4">
          <div className="mr-4 text-xs md:text-base">{t('sort-by')}:</div>
          <div>
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
          {offersContext.offersList && offersContext.offersList.length ? (
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
