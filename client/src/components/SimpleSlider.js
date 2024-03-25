import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from "../img/banner1.jpg";
import banner1 from "../img/banner2.jpg";
import banner3 from "../img/order.jpg";
import banner4 from "../img/banner5.jpg";
import banner6 from "../img/openner.jpg";

function SimpleSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={banner1} alt="Slide 2" className="slider-image" />
      </div>
      <div>
        <img src={banner3} alt="Slide 7" className="slider-image" />
      </div>

      <div>
        <img src={banner6} alt="Slide 4" className="slider-image" />
      </div>
      <div>
        <img src={banner} alt="Slide 1" className="slider-image" />
      </div>
      <div>
        <img src={banner4} alt="Slide 6" className="slider-image" />
      </div>
    </Slider>
  );
}
export default SimpleSlider;
