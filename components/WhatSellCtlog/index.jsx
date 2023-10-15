import { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import Img1 from "@/public/whatcatlog/1.webp";
import Img2 from "@/public/whatcatlog/2.webp";
import Img3 from "@/public/whatcatlog/3.webp";
import Img4 from "@/public/whatcatlog/4.webp";
import Img5 from "@/public/whatcatlog/5.webp";
import ArrowRight from "@/public/whatcatlog/arrowRight.svg";
import ArrowLeft from "@/public/whatcatlog/arrowLeft.svg";

const items = [
  {
    id: 1,
    itemImg: Img1,
    itemTitle: "Food & Drinks",
    itemDes:
      "Pasta, milkshakes, finger bites, contenental dishes, wines? You name it. If you sell fast food, run a resturant or cloud kitchen? Catlog is best way for your customers to place their orders.",
  },
  {
    id: 2,
    itemImg: Img2,
    itemTitle: "Fashions Item",
    itemDes:
      "Do you sell jeans, pretty gowns, sneakers, bespoke fashion items or even fabric materials? Catlog helps you give your customers a simple list, so they can see all the options available to them and make orders.",
  },
  {
    id: 3,
    itemImg: Img3,
    itemTitle: "Gadgets",
    itemDes:
      "From iphones, to earbuds, smartwatches and laptops, Use catlog to give your customers an easy way to browse through all the items you sell and place orders without having to answer too many questions.",
  },
  {
    id: 4,
    itemImg: Img4,
    itemTitle: "Beauty & Makeup",
    itemDes:
      "Beauty products ranging from makeup, perfumes, hair and skin care products can be showcased beautifully to your customers with Catlog. Your customers get to easily see all the varieties of products you sell.",
  },
  {
    id: 5,
    itemImg: Img5,
    itemTitle: "Physical Item",
    itemDes:
      "When you use catlog, you gives your customers an easy and hassle-free experience when they want to buy goods such as kitchen appliances, household equipment, furniture, cooking and eating utensils.",
  },
];

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="bg-my-blue w-7 h-7 rounded-full shadow-2xl inline-flex justify-center items-center absolute -left-0 top-[45%] cursor-pointer z-50"
      onClick={onClick}
    >
      <Image src={ArrowLeft} alt="" />
    </div>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="bg-my-blue w-7 h-7 rounded-full shadow-2xl inline-flex justify-center items-center absolute -right-0  top-[45%] cursor-pointer z-10"
      onClick={onClick}
    >
      <Image src={ArrowRight} alt="" />
    </div>
  );
};

const Index = () => {
  const [singleItem, setSingleItem] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const onMouseEnter = (item) => {
    setSingleItem(item);
  };

  const onMouseLeave = () => {
    setSingleItem(null);
  };

  return (
    <div className="bg-gray-50">
      <div className="mt-32 pt-10 pb-20">
        <div className="w-10/12 mx-auto container">
          <p className="text-4xl md:text-5xl lg:text-6xl font-semibold">
            What you can sell
          </p>
          <p className="text-4xl md:text-5xl lg:text-6xl mt-0 md:mt-4 font-semibold text-my-blue">
            with Catlog
          </p>
        </div>
        <div className="mt-10">
          <Slider
            {...settings}
            className="whatsellcalelog w-full mx-auto container px-5"
          >
            {items.map((item) => (
              <>
                <div
                  className="relative overflow-hidden rounded-3xl w-11/12 mx-auto"
                  key={item.id}
                  onMouseEnter={() => onMouseEnter(item)}
                  onMouseLeave={onMouseLeave}
                >
                  {singleItem?.id === item.id ? (
                    <motion.div
                      animate={{
                        rotate: -3,
                        scale: 1.1,
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <Image
                        src={item.itemImg}
                        alt=""
                        className={`rounded-3xl transition duration-100 w-full blur`}
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      animate={{
                        rotate: 0,
                        scale: 1,
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <Image
                        src={item.itemImg}
                        alt=""
                        className={`rounded-3xl transition duration-100 w-full`}
                      />
                    </motion.div>
                  )}
                  <p className="absolute bg-blue-900 inset-0 opacity-30 rounded-3xl"></p>
                  {singleItem?.id === item.id ? (
                    <>
                      <div
                        className={`p-8 absolute transition-all duration-500 -top-20`}
                      >
                        <p className="text-white text-3xl font-semibold">
                          {item.itemTitle}
                        </p>
                        <p className="text-white text-xl mt-10">
                          {item.itemDes}
                        </p>
                      </div>
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        className={`bg-white shadow rounded px-5 py-3 font-gabarito text-lg font-semibold flex items-center gap-2 transition-all duration-500 absolute bottom-10 left-10`}
                      >
                        <p className="text-my-blue">Get stated</p>
                        <Image src={ArrowRight} alt="" />
                      </motion.button>
                    </>
                  ) : (
                    <>
                      <div
                        className={`p-8 absolute transition-all duration-500 top-[100%]`}
                      >
                        <p className="text-white text-3xl font-semibold">
                          {item.itemTitle}
                        </p>
                        <p className="text-white text-xl mt-10">
                          {item.itemDes}
                        </p>
                      </div>
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        className={`bg-white shadow rounded px-5 py-3 font-gabarito text-lg font-semibold flex items-center gap-2 transition-all duration-500 absolute -bottom-[100%] left-10`}
                      >
                        <p className="text-my-blue">Get stated</p>
                        <Image src={ArrowRight} alt="" />
                      </motion.button>
                    </>
                  )}
                </div>
              </>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Index;
