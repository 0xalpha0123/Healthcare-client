import { useTranslation } from 'next-i18next';
import Card from '../ui/Card';

const OfferSection = ({ description }) => {
  const { t } = useTranslation('common');

  return (
    <Card className="mx-2 my-4">
      <h2 className="text-lg">{t('offer-description')}</h2>
      <hr className="my-2" />
      <div className="whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: description }}></div>
    </Card>
  );
};

export default OfferSection;
