import Img1 from "@/public/ownerSaysCatelog/taylor.jpeg";
import Img2 from "@/public/ownerSaysCatelog/harry.jpeg";
import Img3 from "@/public/ownerSaysCatelog/olivia.jpeg";
import Img4 from "@/public/ownerSaysCatelog/kim.jpeg";
import Img5 from "@/public/ownerSaysCatelog/billie.jpeg";
import ArrowLeft from "@/public/ownerSaysCatelog/arrowLeft.svg";
import ArrowRight from "@/public/ownerSaysCatelog/arrowRight.svg";
import Icon1 from "@/public/ownerSaysCatelog/1.png";
import Icon2 from "@/public/ownerSaysCatelog/2.png";
import Icon3 from "@/public/ownerSaysCatelog/3.png";
import Icon4 from "@/public/ownerSaysCatelog/4.png";
import Icon5 from "@/public/ownerSaysCatelog/5.png";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import TextAnimation from "../Utils/TextAnimation";

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

const index = ({ home }) => {
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
    <div
      className={`ownersayscatelog ${home ? "bg-my-bg-pastel" : "bg-gray-50"}`}
    >
      <div className="mycontainer pt-16 sm:pt-28 pb-40">
        <div>
          <TextAnimation
            letters={[
              {
                letter: "Surprisingly",
                delay: "0",
              },
              {
                letter: "Accurate",
                delay: "0.10",
              },
            ]}
            className={"text-4xl md:text-5xl lg:text-6xl font-semibold"}
          />
          <TextAnimation
            letters={[
              {
                letter: "Everything",
                delay: "0.20",
              },
              {
                letter: "about",
                delay: "0.30",
              },
              {
                letter: "you",
                delay: "0.40",
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
                    {`Taylor Swift, thrives on deep connections, balancing her
                    heartfelt career with an unwavering commitment to friends,
                    and social causes. She's genuinely empathetic, creative, and
                    resilient, embodying the essence of her destiny.`}
                  </p>
                  <div>
                    <p className="text-2xl font-semibold text-my-blue">
                      Taylor Swift
                    </p>
                    <p className="text-xl">Born to be Super Woman</p>
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
                    Harry Styles, was born with profound empathy and charismatic
                    presence. Destined for innovative career with a strong
                    dedication to meaningful relationships. His innate
                    creativity will shape his path as an influential person.
                  </p>
                  <div>
                    <p className="text-2xl font-semibold text-my-blue">
                      Harry Styles
                    </p>
                    <p className="text-xl">Destined for Greatness</p>
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
                    {`Olivia Rodrigo, was born with a natural affinity for
                    emotional expression and connection. With a charisma that
                    effortlessly resonates with her audience, Olivia's path
                    seems destined for impactful storytelling.`}
                  </p>
                  <div>
                    <p className="text-2xl font-semibold text-my-blue">
                      Olivia Rodrigo
                    </p>
                    <p className="text-xl">Destined Storyteller</p>
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
                    {`Kim Kardashian, often perceived through the lens of her
                    public persona, exhibits strong traits such as a sense of
                    responsibility, dedication, and practicality. She was born
                    with a talent for organization and an acute attention to
                    detail.`}
                  </p>
                  <div>
                    <p className="text-2xl font-semibold text-my-blue">
                      Kim Kardashian
                    </p>
                    <p className="text-xl">Everything is not what it seems</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-10 md:gap-20 justify-between px-1 flex-wrap md:flex-nowrap">
                <Image
                  src={Img5}
                  alt=""
                  className="w-full md:w-6/12 rounded-3xl object-cover h-[500px]"
                />
                <div className="w-full md:w-6/12 space-y-7">
                  <Image
                    src={Icon5}
                    alt=""
                    className="w-16 h-16 rounded-full"
                  />
                  <p className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-wide leading-snug text-gray-700 font-gabarito">
                    {`Billie Eilish was born with an innate talent for art and
                    artistic sensibility. She possesses maximum ability to
                    convey complex emotions. Her destiny is clear to be
                    prosperous. However, much self care is needed.`}
                  </p>
                  <div>
                    <p className="text-2xl font-semibold text-my-blue">
                      Billie Eilish
                    </p>
                    <p className="text-xl">
                      Born Artist with a Destiny for Prosperity
                    </p>
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
