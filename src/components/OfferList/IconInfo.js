import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function IconInfo({ icon, label }) {
  return (
    <div className="px-2 text-sm text-gray-600 flex align-center">
      <div>
        <FontAwesomeIcon icon={icon} size={'xs'} />
      </div>
      <div className="ml-1">{label}</div>
    </div>
  );
}

export default IconInfo;
