import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faClinicMedical, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Card from '../ui/Card';
import IconInfo from '../OfferList/IconInfo';

const CompanyCard = ({ company }) => {
  const router = useRouter();

  const goToCompany = (id) => {
    router.push(`/companies/${id}`);
  };

  return (
    <div onClick={goToCompany} className="cursor-pointer relative p-2">
      <Card className="w-full " style={{ padding: 0, height: 300 }}>
        <div
          style={{
            backgroundImage: company.photos.length ? `url(${company.photos[0].file_path})` : '',
            backgroundSize: 'cover',
            height: '60%',
          }}
        ></div>
        <div className="absolute w-full flex justify-center top-40">
          <Card className="flex justify-center items-center">
            <IconInfo icon={faClinicMedical} label={company.name} size="1x"></IconInfo>
          </Card>
        </div>
        <div className="mt-10 px-4">
          {company.locations.map(({ city, street, building_number }, key) => (
            <div className="my-2" key={key}>
              {
                <IconInfo
                  icon={faMapMarkerAlt}
                  label={`${city}, ${street} ${building_number}`}
                  size="sm"
                />
              }
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default CompanyCard;
