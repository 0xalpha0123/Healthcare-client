import { useTranslation } from 'next-i18next';

const ApplySection = () => {
  const { t } = useTranslation('common');

  return (
    <div className="flex justify-center shadow-md p-3 mb-5 bg-white rounded-md ">
      <div className="bg-primary w-36 p-2 uppercase text-white text-center rounded-xl cursor-pointer hover:bg-secondary">
        {t('apply')}
      </div>
    </div>
  );
};

export default ApplySection;
