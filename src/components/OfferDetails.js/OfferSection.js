const OfferSection = ({ description }) => {
  return (
    <div className="bg-white p-5 mb-5 rounded-md">
      <h2 className="text-lg">Offer description</h2>
      <hr className="my-2" />
      <p className="whitespace-pre-wrap">{description}</p>
    </div>
  );
};

export default OfferSection;
