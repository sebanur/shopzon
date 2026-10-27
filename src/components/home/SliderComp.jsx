import React from "react";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = SlickSlider.default || SlickSlider;

const SliderComp = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="flex! items-center bg-gray-100 px-6">
          <div>
            <div className="text-6xl font-bold">
              En Kaliteli Ayakkabılar Burada
            </div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Sapiente, odio unde voluptas cum sunt saepe modi nostrum?
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-50 h-16 flex items-center justify-center bg-gray-200">
              İncele
            </div>
          </div>
          <img src="/shoes.webp" alt="nike" />
        </div>

        <div className="flex! items-center bg-gray-100 px-6">
          <div>
            <div className="text-6xl font-bold">
              En Kaliteli Ayakkabılar Burada
            </div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Sapiente, odio unde voluptas cum sunt saepe modi nostrum?
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-50 h-16 flex items-center justify-center bg-gray-200">
              İncele
            </div>
          </div>
          <img src="/shoes1.webp" alt="nike" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
