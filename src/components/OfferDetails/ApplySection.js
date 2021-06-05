import { useTranslation } from 'next-i18next';
import { ApplicationModal } from './ApplicationModal/ApplicationModal';
import { useState } from 'react';
import Card from '../ui/Card';

const ApplySection = () => {
  const { t } = useTranslation('common');

  const [applicationModalOpen, setApplicationModalOpen] = useState(false);

  return (
    <Card className="mx-2 my-4 text-center">
      <button
        className="bg-primary w-full p-2 uppercase text-white text-center rounded-xl  hover:bg-secondary"
        type="button"
        onClick={(e) => {
          e.preventDefault();
          setApplicationModalOpen(!applicationModalOpen);
        }}
      >
        {t('apply')}
      </button>
      <ApplicationModal isOpen={applicationModalOpen} setOpen={setApplicationModalOpen} />
    </Card>
  );
};
export default ApplySection;
