import { useRouter } from 'next/router';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import { Marker, Popup } from 'react-leaflet';
import { useTranslation } from 'next-i18next';
import IconInfo from '../OfferList/IconInfo';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const CompanyMarker = ({ company, location }) => {
  const router = useRouter();
  const { t } = useTranslation('common');

  const onMarkerShowDetailsClick = (id) => {
    if (company) {
      router.push(`/company/${id}`);
    }
  };

  return (
    <Marker
      position={[location.coordinates.x, location.coordinates.y]}
      draggable={false}
      animate={true}
    >
      <Popup>
        <div className="text-center">
          <div className="self-center mr-2 p-2">
            <img src={company.logo_file_path} />
          </div>
          <div className="py-2">
            <IconInfo icon={faMapMarkerAlt} label={`${location.street}, ${location.city}`} />
          </div>
        </div>
        <div className="text-center py-2">
          <button
            className="  bg-primary hover:bg-secondary text-white font-bold py-1 px-4 rounded transition duration-500"
            onClick={() => {
              onMarkerShowDetailsClick(company.id);
            }}
          >
            {t('show-offer-details')}
          </button>
        </div>
      </Popup>
    </Marker>
  );
};

export default CompanyMarker;
