import { useRouter } from 'next/router';
import Link from 'next/link';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import { Marker, Popup } from 'react-leaflet';
import { useTranslation } from 'next-i18next';

const CompanyMarker = ({ company, location }) => {
  const router = useRouter();
  const { t } = useTranslation('common');

  const onMarkerShowDetailsClick = (id) => {
    router.push(`/company/${id}`);
  };

  return (
    <Marker
      position={[location.coordinates.x, location.coordinates.y]}
      draggable={false}
      animate={true}
    >
      <Popup>
        <div className="flex">
          <div className="self-center mr-2 p-2">
            <img
              className="m-auto"
              style={{
                maxHeight: '80px',
                maxWidth: '80px',
              }}
              src={company.logo_file_path}
            />
          </div>
          <div className="flex flex-col ml-2">
            <span className="block my-1 font-bold text-lg leading-5">
              {company.name}
            </span>
            <hr />
            <span>
              <Link href={company.website_url}>
                <a target="_blank">{company.website_url}</a>
              </Link>
            </span>
            <address className="font-bold my-2">{`${location.street}, ${location.city}`}</address>
          </div>
        </div>
        <div>
          <button
            className="block w-full bg-primary hover:bg-secondary text-white font-bold p-1 rounded"
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
