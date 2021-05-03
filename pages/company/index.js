import { useQuery } from 'react-fetching-library';

import { getCompaniesAction } from '../../src/api/actions/companyActions';

import Layout from '../../src/components/ui/layout/Layout';
import CompanyCard from '../../src/components/CompanyList/CompanyCard';

const Companies = () => {
  const { payload } = useQuery(getCompaniesAction());

  if (payload) {
    return (
      <Layout>
        <div className="flex w-full overflow-scroll">
          <div className="flex flex-col p-5 bg-gray-100 w-full h-full">
            {payload.map((company) => (
              <CompanyCard company={company} />
            ))}
          </div>
        </div>
      </Layout>
    );
  }

  return '';
};

export default Companies;
