import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col">
        <Navbar />
      </div>
      <div className="flex flex-grow overflow-hidden">{children}</div>
    </div>
  );
};

export default Layout;
