import { useState } from "react";
import Image from "next/image";
import { Fade } from "react-reveal";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Img1 from "@/public/howToUse/1.webp";
import Img2 from "@/public/howToUse/2.webp";
import Img3 from "@/public/howToUse/3.webp";
import Img4 from "@/public/howToUse/4.webp";
import ArrowRight from "@/public/howToUse/arrowRight.svg";
import ArrowLeft from "@/public/howToUse/arrowLeft.svg";

const Index = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const allImages = [Img1, Img2, Img3, Img4];

  const imgChanger = (value) => {
    if (value === "increase") {
      setCurrentImage((prevImage) => {
        if (prevImage < allImages.length) {
          return prevImage + 1;
        }
        return prevImage;
      });
    } else {
      setCurrentImage((prevImage) => {
        if (prevImage > 0) {
          return prevImage - 1;
        }
        return prevImage;
      });
    }
  };

  const imgChangeWithNumber = (value) => {
    setCurrentImage(value);
  };

  return (
    <div className="w-10/12 mx-auto mt-32 container py-10">
      <div>
        <p className="text-4xl md:text-5xl lg:text-6xl font-semibold">
          How to use
        </p>
        <p className="text-4xl md:text-5xl lg:text-6xl font-semibold text-my-yellow mt-0 md:mt-4">
          store links
        </p>
      </div>
      <div className="mt-10 flex justify-between items-center gap-20">
        <div className="p-5 space-y-8 w-6/12 border-l-4 border-gray-100 relative mx-auto">
          <Fade bottom>
            <p
              className={`${
                currentImage === 0
                  ? "opacity-0"
                  : "border-my-yellow transition-all duration-700 border-l-4 absolute -left-1 top-0"
              }`}
              style={{
                height: `${(100 / allImages.length) * currentImage}%`,
              }}
            ></p>
            <div
              className="cursor-pointer"
              onClick={() => imgChangeWithNumber(1)}
            >
              <p
                className={`bg-gray-100 w-11 h-11 rounded-full flex justify-center items-center font-bold opacity-70 font-gabarito tracking-widest ${
                  currentImage === 1 ? "text-my-yellow" : "text-my-text-gray"
                }`}
              >
                01
              </p>
              <p className="mt-2 text-2xl opacity-70">
                Create an store and add your products - then you get a link
              </p>
            </div>
            <div
              className="cursor-pointer"
              onClick={() => imgChangeWithNumber(2)}
            >
              <p
                className={`bg-gray-100 w-11 h-11 rounded-full flex justify-center items-center font-bold opacity-70 font-gabarito tracking-widest ${
                  currentImage === 2 ? "text-my-yellow" : "text-my-text-gray"
                }`}
              >
                02
              </p>
              <p className="mt-2 text-2xl opacity-70">
                Add your link to your social profiles and share to customers
                when they reach out
              </p>
            </div>
            <div
              className="cursor-pointer"
              onClick={() => imgChangeWithNumber(3)}
            >
              <p
                className={`bg-gray-100 w-11 h-11 rounded-full flex justify-center items-center font-bold opacity-70 font-gabarito tracking-widest ${
                  currentImage === 3 ? "text-my-yellow" : "text-my-text-gray"
                }`}
              >
                03
              </p>
              <p className="mt-2 text-2xl opacity-70">
                Customers visit your link and select items they want to buy
              </p>
            </div>
            <div
              className="cursor-pointer"
              onClick={() => imgChangeWithNumber(4)}
            >
              <p
                className={`bg-gray-100 w-11 h-11 rounded-full flex justify-center items-center font-bold opacity-70 font-gabarito tracking-widest ${
                  currentImage === 4 ? "text-my-yellow" : "text-my-text-gray"
                }`}
              >
                04
              </p>
              <p className="mt-2 text-2xl opacity-70">
                The order is sent to your whatsapp so you can chat with the
                customer and close your sales
              </p>
            </div>
          </Fade>
        </div>
        <div className="bg-my-bg-pastel w-6/12 rounded-3xl relative  mx-auto">
          <Fade bottom key={currentImage}>
            <Image
              src={
                (currentImage === 0 && allImages[0]) ||
                (currentImage === 1 && allImages[0]) ||
                allImages[currentImage - 1]
              }
              alt=""
              className="px-28 pt-10 object-cover h-4/6"
            />
          </Fade>
          <div>
            <Image
              src={ArrowLeft}
              alt=""
              className="absolute top-[50%] left-5 cursor-pointer"
              onClick={() => imgChanger("decrease")}
            />
            <Image
              src={ArrowRight}
              alt=""
              className="absolute top-[50%] right-5 cursor-pointer"
              onClick={() => imgChanger("increase")}
            />
          </div>
          <div className="absolute right-5 top-5 flex gap-2 items-center">
            <CircularProgressbar
              value={(100 / allImages.length) * currentImage}
              className="w-5 h-5"
              strokeWidth={20}
              styles={buildStyles({
                pathColor: `#EF940F`,
              })}
            />
            <div className="font-semibold font-gabarito flex">
              <p>{currentImage}</p>
              <p>/</p>
              <p>4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
