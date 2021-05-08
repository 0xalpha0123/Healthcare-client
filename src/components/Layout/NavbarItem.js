import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';

function NavbarItem({ label, href, icon }) {
  const router = useRouter();
  const activeClass = router.pathname === href ? 'text-secondary' : '';

  return (
    <Link href={href}>
      <div
        className={`cursor-pointer mx-4 hover:text-secondary transition duration-500 ${activeClass} text-xs md:text-base`}
      >
        <FontAwesomeIcon icon={icon} size={'lg'} className="mr-2 " />
        {label}
      </div>
    </Link>
  );
}

export default NavbarItem;
