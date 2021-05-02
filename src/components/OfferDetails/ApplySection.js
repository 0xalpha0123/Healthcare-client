import { useTranslation } from 'next-i18next';

const ApplySection = () => {
  const { t } = useTranslation('offer');

  return (
    <div className="flex justify-center shadow-md p-3 mb-5 bg-white rounded-md ">
      <div className="bg-gray-400 w-36 p-2 uppercase text-white text-center rounded-2xl cursor-pointer">
        {t('apply')}
      </div>
    </div>
  );
};

export default ApplySection;
