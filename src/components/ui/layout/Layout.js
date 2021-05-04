import Filters from './Filters';
import Navbar from './Navbar';

const Layout = ({ children, filters, filtersData }) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col">
        <Navbar />
        {filters ? <Filters filtersData={filtersData} /> : ''}
      </div>
      <div className="flex flex-grow overflow-hidden">{children}</div>
    </div>
  );
};

export default Layout;
