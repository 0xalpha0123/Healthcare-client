import React, { useEffect, useState } from "react";
import Filters from "./Filters";

const Header = () => {
  return (
    <nav className="fixed h-32 z-50 w-screen bg-white">
      <div className="flex flex-col px-2 h-16 border-b-2 justify-center ">
        <div className="flex">Header</div>
      </div>
      <Filters />
    </nav>
  );
};

export default Header;
