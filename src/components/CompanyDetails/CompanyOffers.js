import OfferCard from '../OfferList/OfferCard';
import classes from '../OfferList/custom.module.css';
import { useTranslation } from 'react-i18next';
import NoResults from '../ui/NoResults';
function CompanyOffers({ offers }) {
  const { t } = useTranslation('common');
  const cards = offers.map((offer, key) => <OfferCard offer={offer} key={key} hideCompany />);
  return (
    <div className="h-full flex flex-col px-6">
      <div>
        {t('companyOffers')} <hr className="mb-6 mt-2" />
      </div>
      <div className={classes.list}>
        {offers.length ? cards : <NoResults className="mb-8" message={t('noCompanyOffers')} />}
      </div>
    </div>
  );
}

export default CompanyOffers;
