import React, { useEffect, useState } from 'react';
import Filters from './Filters';
import { Navbar } from './Navbar';

const Header = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Filters />
    </div>
  );
};

export default Header;
