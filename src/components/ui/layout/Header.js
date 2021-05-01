import React, { useEffect, useState } from 'react';
import Filters from './Filters';
import { Navbar } from './Navbar';

const Header = () => {
  return (
    <div className="flex flex-col h-32 z-50 w-screen bg-white">
      <Navbar />
      <Filters />
    </div>
  );
};

export default Header;
