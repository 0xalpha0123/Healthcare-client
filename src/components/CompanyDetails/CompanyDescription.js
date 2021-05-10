import { useTranslation } from 'react-i18next';
import Card from '../ui/Card';

const CompanyDescription = ({ description }) => {
  const { t } = useTranslation('common');
  return (
    <Card className="my-2">
      <div>{t('companyPresentation')}</div>
      <hr className="mb-6 mt-2" />
      <div className="whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: description }}></div>
    </Card>
  );
};

export default CompanyDescription;
