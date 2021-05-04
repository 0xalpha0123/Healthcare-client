import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const router = useRouter();

  const goToMainPage = () => {
    router.push('/');
  };

  const goToCompaniesPage = () => {
    router.push('/company');
  };

  return (
    <nav className="flex justify-between h-16 shadow-lg border-b z-50 border-gray-200">
      <div></div>
      <div className="flex justify-center">
        <img
          onClick={() => goToMainPage()}
          className="cursor-pointer"
          src="/img/logo.svg"
        />
      </div>
      <div className="flex justify-center items-center pr-5 text-secondary">
        <FontAwesomeIcon
          className="cursor-pointer"
          onClick={() => goToCompaniesPage()}
          icon={faMapMarkerAlt}
          size={'lg'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
