import React from "react";
import Header from "./Header";

const Layout = ({ children }) => (
  <div className="w-screen h-screen">
    <Header />
    <div className="pt-32">{children}</div>
  </div>
);

export default Layout;
