import React from 'react';
import dynamic from 'next/dynamic';

import Header from './Header';

const Layout = ({ children, offers }) => {
  const Map = dynamic(() => import('./Map'), { ssr: false });
  console.log('>> children', children);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex overflow-hidden">
        <div className="w-full overflow-scroll">{children}</div>
        <div className="w-full">
          <Map
            // onMarkerShowDetailsClick={onMarkerShowDetailsClick}
            offers={offers}
          />
        </div>
      </div>
    </div>
  );
};

export default Layout;
