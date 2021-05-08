import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="h-wrapper p-4"> {children}</div>
    </div>
  );
};

export default Layout;
