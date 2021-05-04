import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

import Filters from './Filters';
import Navbar from './Navbar';

const Layout = ({ children, offers, filters, filtersData }) => {
  const router = useRouter();
  const Map = dynamic(() => import('./Map/'), { ssr: false });

  const onMarkerShowDetailsClick = (id) => {
    router.push(`/offer/${id}`);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* <Header /> */}
      <div className="flex flex-col">
        <Navbar />
        {filters ? <Filters filtersData={filtersData} /> : ''}
      </div>
      <div className="flex flex-grow overflow-hidden">
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
