import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadTear } from '@fortawesome/free-regular-svg-icons';
import Card from './Card';

function NoResults({ message }) {
  return (
    <Card>
      {/* <div> */}
      <FontAwesomeIcon icon={faSadTear} size="lg" className="mr-5" />
      {message}
      {/* </div> */}
    </Card>
  );
}

export default NoResults;
