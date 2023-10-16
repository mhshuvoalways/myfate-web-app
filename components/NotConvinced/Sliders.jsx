import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sliders = ({ rtl }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    speed: 10000,
    autoplay: true,
    cssEase: "linear",
    rtl: rtl ? true : false,
    rows: 1,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 615,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="notc">
      <div className="items-center gap-2 bg-gray-100 hover:bg-my-bg-pastel py-3 px-5 rounded-full cursor-pointer notconvince justify-center">
        <p className="text-2xl">🔗</p>
        <p className="text-2xl">Custom store links</p>
      </div>
      <div className="items-center gap-2 bg-gray-100 hover:bg-my-bg-pastel py-3 px-5 rounded-full cursor-pointer notconvince justify-center">
        <p className="text-2xl">🔎</p>
        <p className="text-2xl">Automatic SEO</p>
      </div>
      <div className="items-center gap-2 bg-gray-100 hover:bg-my-bg-pastel py-3 px-5 rounded-full cursor-pointer notconvince justify-center">
        <p className="text-2xl">👠</p>
        <p className="text-2xl">Manage multiple product options</p>
      </div>
      <div className="items-center gap-2 bg-gray-100 hover:bg-my-bg-pastel py-3 px-5 rounded-full cursor-pointer notconvince justify-center">
        <p className="text-2xl">📦</p>
        <p className="text-2xl">Upload multiple products at once</p>
      </div>
      <div className="items-center gap-2 bg-gray-100 hover:bg-my-bg-pastel py-3 px-5 rounded-full cursor-pointer notconvince justify-center">
        <p className="text-2xl">💬</p>
        <p className="text-2xl">Add multiple whatsapp numbers</p>
      </div>
      <div className="items-center gap-2 bg-gray-100 hover:bg-my-bg-pastel py-3 px-5 rounded-full cursor-pointer notconvince justify-center">
        <p className="text-2xl">🎁</p>
        <p className="text-2xl">Create discounts</p>
      </div>
      <div className="items-center gap-2 bg-gray-100 hover:bg-my-bg-pastel py-3 px-5 rounded-full cursor-pointer notconvince justify-center">
        <p className="text-2xl">🎟️</p>
        <p className="text-2xl">Create coupons</p>
      </div>
      <div className="items-center gap-2 bg-gray-100 hover:bg-my-bg-pastel py-3 px-5 rounded-full cursor-pointer notconvince justify-center">
        <p className="text-2xl">⚙️</p>
        <p className="text-2xl">Configure how customers see your products</p>
      </div>
    </Slider>
  );
};

export default Sliders;
