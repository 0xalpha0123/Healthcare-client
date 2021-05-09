import { useRouter } from 'next/router';
import {
  faMapMarkerAlt,
  faHandshake,
  faBriefcaseMedical,
  faUserMd,
  faClinicMedical,
} from '@fortawesome/free-solid-svg-icons';
import Card from '../ui/Card';
import { useTranslation } from 'react-i18next';
import IconInfo from './IconInfo';

const OfferCard = ({ offer, type = 'dynamic', hideCompany }) => {
  const router = useRouter();
  const { t } = useTranslation('common');

  const goToOffer = (id) => {
    if (type === 'dynamic') {
      router.push(`/offer/${id}`);
    }
  };

  return (
    <div onClick={() => goToOffer(offer.id)}>
      <Card key={`offer-${offer.id}`} className="flex  hover:border-gray-300 m-2 cursor-pointer">
        {!hideCompany && (
          <div className="flex justify-center align-center w-24">
            <img className="self-center max-w-full max-h-full" src={offer.company.logo_file_path} />
          </div>
        )}

        <div className="w-full ml-6">
          <div className="flex justify-between pb-4 flex-wrap">
            <div className="flex flex-grow  md:text-lg font-bold pb-3">
              <p>{offer.title}</p>
            </div>
            <div className="flex flex-col items-end ">
              <div className="flex flex-grow md:text-xl">
                <p className="font-bold text-accent">
                  {offer.salary_from} - {offer.salary_to} {t('currency')}
                </p>
              </div>
            </div>
          </div>
          <div className="flex align-center flex-wrap">
            {!hideCompany && <IconInfo label={offer.company.name} icon={faClinicMedical} />}
            <IconInfo
              label={offer.locations.map((el) => el.city).join(', ')}
              icon={faMapMarkerAlt}
            />
            <IconInfo
              label={offer.agreement_types.map((el) => el.name).join(', ')}
              icon={faHandshake}
            />
            <IconInfo label={offer.profession.name} icon={faBriefcaseMedical} />
            <IconInfo label={offer.specialization.name} icon={faUserMd} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default OfferCard;
