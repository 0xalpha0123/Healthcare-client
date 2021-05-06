import { FetchClient } from '../../src/context/clientContextController/ClientContextController';
import { getCompaniesAction } from '../../src/api/actions/companyActions';
import CompanyCard from '../../src/components/CompanyList/CompanyCard';

const Companies = ({ companies }) => {
  if (companies) {
    return (
      <div className="flex flex-col w-full h-full p-5 bg-gray-100 overflow-scroll">
        {companies.map((company) => (
          <CompanyCard company={company} />
        ))}
      </div>
    );
  }

  return '';
};

export const getServerSideProps = async () => {
  const { payload } = await FetchClient.query(getCompaniesAction());

  return {
    props: {
      companies: payload,
    },
  };
};

export default Companies;
