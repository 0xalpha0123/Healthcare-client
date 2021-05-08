import { faBuilding, faListAlt } from '@fortawesome/free-regular-svg-icons';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import NavbarItem from './NavbarItem';

const Navbar = () => {
  const { t } = useTranslation('common');

  return (
    <nav className="flex justify-center md:justify-between items-center p-10 border-b border-grey flex-wrap md:h-navbar">
      <div className="w-full md:max-w-xs flex justify-center">
        <Link href="/">
          <img src="/img/logo.svg" className="cursor-pointer" />
        </Link>
      </div>
      <div className="flex font-semibold mt-8 md:mt-0">
        <NavbarItem href="/" icon={faListAlt} label={t('offers')} />
        <NavbarItem href="/companies" icon={faBuilding} label={t('companies')} />
      </div>
    </nav>
  );
};

export default Navbar;
