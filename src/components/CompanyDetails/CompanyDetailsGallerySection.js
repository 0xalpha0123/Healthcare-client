import Gallery from 'react-photo-gallery';

const CompanyDetailsGallerySection = ({ photos }) => {
  const parsePhotosList = (photos) =>
    photos.map((photo) => {
      return {
        src: photo.file_path,
        width: 2,
        height: 2,
      };
    });

  return (
    <div className="bg-white shadow-md p-5 mb-5 rounded-md">
      <Gallery photos={parsePhotosList(photos)} />
    </div>
  );
};

export default CompanyDetailsGallerySection;
