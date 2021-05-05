import { FetchClient } from '../../src/context/clientContextController/ClientContextController';
import { getCompaniesAction } from '../../src/api/actions/companyActions';
import CompanyCard from '../../src/components/CompanyList/CompanyCard';
import Layout from '../../src/components/ui/layout/Layout';

const Companies = ({ companies }) => {
  if (companies) {
    return (
      <Layout>
        <div className="flex w-full overflow-scroll">
          <div className="flex flex-col p-5 bg-gray-100 w-full h-full">
            {companies.map((company) => (
              <CompanyCard company={company} />
            ))}
          </div>
        </div>
      </Layout>
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
