import Link from 'next/link';

const Navbar = () => (
  <nav className="flex justify-center h-16 shadow-lg border-b z-50 border-gray-200">
    <Link href="/">
      <img className="cursor-pointer" src="/img/logo.svg" />
    </Link>
  </nav>
);

export default Navbar;
