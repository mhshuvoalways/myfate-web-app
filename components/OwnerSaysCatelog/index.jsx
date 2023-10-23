import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TextAnimation from "../TextAnimation";
import Img1 from "@/public/ownerSaysCatelog/1.webp";
import Img2 from "@/public/ownerSaysCatelog/2.webp";
import Img3 from "@/public/ownerSaysCatelog/3.webp";
import Img4 from "@/public/ownerSaysCatelog/4.webp";
import Icon1 from "@/public/ownerSaysCatelog/icon1.webp";
import Icon2 from "@/public/ownerSaysCatelog/icon2.webp";
import Icon3 from "@/public/ownerSaysCatelog/icon3.webp";
import Icon4 from "@/public/ownerSaysCatelog/icon4.webp";
import ArrowRight from "@/public/ownerSaysCatelog/arrowRight.svg";
import ArrowLeft from "@/public/ownerSaysCatelog/arrowLeft.svg";

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="bg-white w-10 h-10 md:w-16 md:h-16 rounded-full shadow-2xl inline-flex justify-center items-center absolute right-12 md:right-20 -bottom-14 md:bottom-0 cursor-pointer z-10 prevarrow"
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
      className="bg-my-blue w-10 h-10 md:w-16 md:h-16 rounded-full shadow-2xl inline-flex justify-center items-center absolute right-0 -bottom-14 md:bottom-0 cursor-pointer z-10 nextarrow"
      onClick={onClick}
    >
      <Image src={ArrowRight} alt="" />
    </div>
  );
};

const index = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="bg-gray-50 ownersayscatelog">
      <div className="mycontainer mt-32 pt-16 sm:pt-28 pb-40">
        <div>
          <TextAnimation
            letters={[
              {
                letter: "What",
                delay: "0",
              },
              {
                letter: "business",
                delay: "0.20",
              },
              {
                letter: "owners",
                delay: "0.40",
              },
            ]}
            className={"text-4xl md:text-5xl lg:text-6xl font-semibold"}
          />
          <TextAnimation
            letters={[
              {
                letter: "say",
                delay: "0.60",
              },
              {
                letter: "about",
                delay: "0.80",
              },
              {
                letter: "catlog",
                delay: "1",
              },
            ]}
            className={
              "text-4xl md:text-5xl lg:text-6xl mt-0 md:mt-4 font-semibold text-my-blue"
            }
          />
        </div>
        <div className="mt-20 relative">
          <Slider {...settings}>
            <div>
              <div className="flex gap-10 md:gap-20 justify-between px-1 flex-wrap md:flex-nowrap">
                <Image
                  src={Img1}
                  alt=""
                  className="w-full md:w-6/12 rounded-3xl object-cover h-[500px]"
                />
                <div className="w-full md:w-6/12 space-y-7">
                  <Image
                    src={Icon1}
                    alt=""
                    className="w-16 h-16 rounded-full"
                  />
                  <p className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-wide leading-snug text-gray-700 font-gabarito">
                    “I love that customers just visit my Catlog link, pick what
                    they want and I just get a message on WhatsApp with what
                    they want to order, and their delivery details, it’s just
                    too sweet
                  </p>
                  <div>
                    <p className="text-2xl font-semibold text-my-blue">
                      Chukwuma Rejoice
                    </p>
                    <p className="text-xl">Bernadines Bistro (Cloud kitchen)</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-10 md:gap-20 justify-between px-1 flex-wrap md:flex-nowrap">
                <Image
                  src={Img2}
                  alt=""
                  className="w-full md:w-6/12 rounded-3xl object-cover h-[500px]"
                />
                <div className="w-full md:w-6/12 space-y-7">
                  <Image
                    src={Icon2}
                    alt=""
                    className="w-16 h-16 rounded-full"
                  />
                  <p className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-wide leading-snug text-gray-700 font-gabarito">
                    “Catlog has saved me from having long and sometimes
                    unnecessary conversations with customers in the name of
                    placing orders. I have all the information on their orders
                    at a glance.
                  </p>
                  <div>
                    <p className="text-2xl font-semibold text-my-blue">
                      Chidinma Onyeiwu
                    </p>
                    <p className="text-xl">Pancake Boss (Breakfast Store)</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-10 md:gap-20 justify-between px-1 flex-wrap md:flex-nowrap">
                <Image
                  src={Img3}
                  alt=""
                  className="w-full md:w-6/12 rounded-3xl object-cover h-[500px]"
                />
                <div className="w-full md:w-6/12 space-y-7">
                  <Image
                    src={Icon3}
                    alt=""
                    className="w-16 h-16 rounded-full"
                  />
                  <p className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-wide leading-snug text-gray-700 font-gabarito">
                    “Catlog helps me save time, I no longer have to send 40
                    pictures to customers before they buy. With Catlog, my
                    customers are able to easily purchase sneakers or add to
                    cart to buy later.
                  </p>
                  <div>
                    <p className="text-2xl font-semibold text-my-blue">
                      Surprise Ayodele
                    </p>
                    <p className="text-xl">Jisstore NG (Sneaker Store)</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-10 md:gap-20 justify-between px-1 flex-wrap md:flex-nowrap">
                <Image
                  src={Img4}
                  alt=""
                  className="w-full md:w-6/12 rounded-3xl object-cover h-[500px]"
                />
                <div className="w-full md:w-6/12 space-y-7">
                  <Image
                    src={Icon4}
                    alt=""
                    className="w-16 h-16 rounded-full"
                  />
                  <p className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-wide leading-snug text-gray-700 font-gabarito">
                    “Catlog has helped cut 50% of the conversations we have with
                    customers. Instead of going back and forth with every
                    customer, we just send a link and they are able to select
                    what they want.
                  </p>
                  <div>
                    <p className="text-2xl font-semibold text-my-blue">
                      Adeola Owosho
                    </p>
                    <p className="text-xl">{`Mazzini's Box (Workspace Accessories)`}</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-10 md:gap-20 justify-between px-1 flex-wrap md:flex-nowrap">
                <Image
                  src={Img3}
                  alt=""
                  className="w-full md:w-6/12 rounded-3xl object-cover h-[500px]"
                />
                <div className="w-full md:w-6/12 space-y-7">
                  <Image
                    src={Icon3}
                    alt=""
                    className="w-16 h-16 rounded-full"
                  />
                  <p className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-wide leading-snug text-gray-700 font-gabarito">
                    “Catlog helps me save time, I no longer have to send 40
                    pictures to customers before they buy. With Catlog, my
                    customers are able to easily purchase sneakers or add to
                    cart to buy later.
                  </p>
                  <div>
                    <p className="text-2xl font-semibold text-my-blue">
                      Surprise Ayodele
                    </p>
                    <p className="text-xl">Jisstore NG (Sneaker Store)</p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default index;
