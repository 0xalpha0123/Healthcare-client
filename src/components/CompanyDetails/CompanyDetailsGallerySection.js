import Slider from 'react-slick';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const CompanyDetailsGallerySection = ({ photos }) => {
  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 6000,
    infinite: true,
    pauseOnHover: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-white shadow-md p-5 rounded-md">
      <Slider className="mb-5" {...sliderSettings}>
        {photos.map((photo) => (
          <div>
            <img className="m-auto" alt={photo.name} src={photo.file_path} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CompanyDetailsGallerySection;
