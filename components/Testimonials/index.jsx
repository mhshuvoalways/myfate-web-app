import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Item1 from "@/public/testimonials/1.jpeg";
import Item2 from "@/public/testimonials/2.webp";
import Item3 from "@/public/testimonials/3.webp";
import Item4 from "@/public/testimonials/4.webp";
import Item5 from "@/public/testimonials/5.jpeg";
import Item6 from "@/public/testimonials/6.webp";
import Item7 from "@/public/testimonials/7.jpeg";

const index = ({ storeLinks }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 8,
    arrows: false,
    speed: 20000,
    autoplay: true,
    cssEase: "linear",
    pauseOnHover: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };

  return (
    <div className="w-full mt-32">
      {storeLinks && (
        <p className="font-semibold text-2xl text-center w-10/12 mx-auto mb-20">
          Trusted by thousands of Merchants
        </p>
      )}
      <Slider {...settings}>
        <div>
          <Image
            src={Item1}
            alt=""
            className="rounded-full w-12 h-12 shadow-md border"
          />
        </div>
        <div>
          <Image
            src={Item2}
            alt=""
            className="rounded-full w-12 h-12 shadow-md border"
          />
        </div>
        <div>
          <Image
            src={Item3}
            alt=""
            className="rounded-full w-12 h-12 shadow-md border"
          />
        </div>
        <div>
          <Image
            src={Item4}
            alt=""
            className="rounded-full w-12 h-12 shadow-md border"
          />
        </div>
        <div>
          <Image
            src={Item5}
            alt=""
            className="rounded-full w-12 h-12 shadow-md border"
          />
        </div>
        <div>
          <Image
            src={Item6}
            alt=""
            className="rounded-full w-12 h-12 shadow-md border"
          />
        </div>
        <div>
          <Image
            src={Item7}
            alt=""
            className="rounded-full w-12 h-12 shadow-md border"
          />
        </div>
        <div>
          <Image
            src={Item1}
            alt=""
            className="rounded-full w-12 h-12 shadow-md border"
          />
        </div>
        <div>
          <Image
            src={Item2}
            alt=""
            className="rounded-full w-12 h-12 shadow-md border"
          />
        </div>
        <div>
          <Image
            src={Item3}
            alt=""
            className="rounded-full w-12 h-12 shadow-md border"
          />
        </div>
        <div>
          <Image
            src={Item4}
            alt=""
            className="rounded-full w-12 h-12 shadow-md border"
          />
        </div>
        <div>
          <Image
            src={Item5}
            alt=""
            className="rounded-full w-12 h-12 shadow-md border"
          />
        </div>
        <div>
          <Image
            src={Item6}
            alt=""
            className="rounded-full w-12 h-12 shadow-md border"
          />
        </div>
        <div>
          <Image
            src={Item7}
            alt=""
            className="rounded-full w-12 h-12 shadow-md border"
          />
        </div>
        <div>
          <Image
            src={Item1}
            alt=""
            className="rounded-full w-12 h-12 shadow-md border"
          />
        </div>
        <div>
          <Image
            src={Item2}
            alt=""
            className="rounded-full w-12 h-12 shadow-md border"
          />
        </div>
        <div>
          <Image
            src={Item3}
            alt=""
            className="rounded-full w-12 h-12 shadow-md border"
          />
        </div>
        <div>
          <Image
            src={Item4}
            alt=""
            className="rounded-full w-12 h-12 shadow-md border"
          />
        </div>
        <div>
          <Image
            src={Item5}
            alt=""
            className="rounded-full w-12 h-12 shadow-md border"
          />
        </div>
        <div>
          <Image
            src={Item6}
            alt=""
            className="rounded-full w-12 h-12 shadow-md border"
          />
        </div>
        <div>
          <Image
            src={Item7}
            alt=""
            className="rounded-full w-12 h-12 shadow-md border"
          />
        </div>
      </Slider>
    </div>
  );
};

export default index;
