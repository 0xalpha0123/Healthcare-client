import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

import Header from './Header';

const Layout = ({ children, offers }) => {
  const router = useRouter();
  const Map = dynamic(() => import('./Map'), { ssr: false });

  const onMarkerShowDetailsClick = (id) => {
    router.push(`/offer/${id}`);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex overflow-hidden">
        <div className="w-full overflow-scroll">{children}</div>
        <div className="w-full">
          <Map
            onMarkerShowDetailsClick={onMarkerShowDetailsClick}
            offers={offers}
          />
        </div>
      </div>
    </div>
  );
};

export default Layout;
