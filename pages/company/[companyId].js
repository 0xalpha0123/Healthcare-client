import { useQuery } from 'react-fetching-library';

import Layout from '../../src/components/ui/layout/Layout';

const CompanyDetails = () => {
  return (
    <Layout>
      <div className="flex w-full overflow-scroll">
        <div className="flex flex-col p-5 bg-gray-100 w-full h-full">left</div>
        <div className="w-full">right</div>
      </div>
    </Layout>
  );
};

export default CompanyDetails;
