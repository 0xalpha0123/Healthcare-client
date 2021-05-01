import parse from 'html-react-parser';

const CompanySection = ({ description }) => {
  return (
    <div className="bg-white p-5 mb-5 rounded-md">
      <h2 className="text-lg">Company</h2>
      <hr className="my-2" />
      <p className="whitespace-pre-wrap">{parse(description)}</p>
    </div>
  );
};

export default CompanySection;
