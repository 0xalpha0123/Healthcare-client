import Link from 'next/link';

export const Navbar = () => (
  <nav className="flex justify-center h-16 shadow-md">
    <Link href="/">
      <img className="cursor-pointer" src="/img/logo.svg" />
    </Link>
  </nav>
);
