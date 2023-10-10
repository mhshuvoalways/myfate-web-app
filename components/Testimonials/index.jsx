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

const index = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 7,
    arrows: false,
    speed: 10000,
    autoplaySpeed: 100,
    autoplay: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <div className="w-full mt-32">
      <Slider {...settings}>
        <div>
          <Image
            src={Item1}
            alt=""
            className="rounded-full w-16 h-16 shadow-md border"
          />
        </div>
        <div>
          <Image
            src={Item2}
            alt=""
            className="rounded-full w-16 h-16 shadow-md border"
          />
        </div>
        <div>
          <Image
            src={Item3}
            alt=""
            className="rounded-full w-16 h-16 shadow-md border"
          />
        </div>
        <div>
          <Image
            src={Item4}
            alt=""
            className="rounded-full w-16 h-16 shadow-md border"
          />
        </div>
        <div>
          <Image
            src={Item5}
            alt=""
            className="rounded-full w-16 h-16 shadow-md border"
          />
        </div>
        <div>
          <Image
            src={Item6}
            alt=""
            className="rounded-full w-16 h-16 shadow-md border"
          />
        </div>
        <div>
          <Image
            src={Item7}
            alt=""
            className="rounded-full w-16 h-16 shadow-md border"
          />
        </div>
        <div>
          <Image
            src={Item1}
            alt=""
            className="rounded-full w-16 h-16 shadow-md border"
          />
        </div>
        <div>
          <Image
            src={Item2}
            alt=""
            className="rounded-full w-16 h-16 shadow-md border"
          />
        </div>
        <div>
          <Image
            src={Item3}
            alt=""
            className="rounded-full w-16 h-16 shadow-md border"
          />
        </div>
        <div>
          <Image
            src={Item4}
            alt=""
            className="rounded-full w-16 h-16 shadow-md border"
          />
        </div>
        <div>
          <Image
            src={Item5}
            alt=""
            className="rounded-full w-16 h-16 shadow-md border"
          />
        </div>
        <div>
          <Image
            src={Item6}
            alt=""
            className="rounded-full w-16 h-16 shadow-md border"
          />
        </div>
        <div>
          <Image
            src={Item7}
            alt=""
            className="rounded-full w-16 h-16 shadow-md border"
          />
        </div>
        <div>
          <Image
            src={Item1}
            alt=""
            className="rounded-full w-16 h-16 shadow-md border"
          />
        </div>
        <div>
          <Image
            src={Item2}
            alt=""
            className="rounded-full w-16 h-16 shadow-md border"
          />
        </div>
        <div>
          <Image
            src={Item3}
            alt=""
            className="rounded-full w-16 h-16 shadow-md border"
          />
        </div>
        <div>
          <Image
            src={Item4}
            alt=""
            className="rounded-full w-16 h-16 shadow-md border"
          />
        </div>
        <div>
          <Image
            src={Item5}
            alt=""
            className="rounded-full w-16 h-16 shadow-md border"
          />
        </div>
        <div>
          <Image
            src={Item6}
            alt=""
            className="rounded-full w-16 h-16 shadow-md border"
          />
        </div>
        <div>
          <Image
            src={Item7}
            alt=""
            className="rounded-full w-16 h-16 shadow-md border"
          />
        </div>
      </Slider>
    </div>
  );
};

export default index;
