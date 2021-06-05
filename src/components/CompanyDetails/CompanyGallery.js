import { useTranslation } from 'react-i18next';
import Card from '../ui/Card';

function CompanyGallery({ photos }) {
  const { t } = useTranslation('common');
  const photoCards = photos.map((photo, key) => (
    <Card
      key={key}
      style={{
        backgroundImage: `url(${photo.file_path})`,
        backgroundSize: 'cover',
        width: '200px',
        height: '200px',
        margin: '5px',
      }}
    ></Card>
  ));
  return (
    <Card className="mb-4">
      <div>{t('companyGallery')}</div>
      <hr className="mb-6 mt-2" />

      <div className="flex flex-wrap justify-center md:justify-start"> {photoCards}</div>
    </Card>
  );
}

export default CompanyGallery;
