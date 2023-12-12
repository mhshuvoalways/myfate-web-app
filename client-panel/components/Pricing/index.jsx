import ArrowPhoto from "@/public/pricing/arrow.svg";
import Image from "next/image";
import { useState } from "react";
import { Fade } from "react-reveal";
import TextAnimation from "../Utils/TextAnimation";
import PricingItem from "./PricingItem";

const Index = () => {
  const [selectPrice, setSelectPrice] = useState("monthly");

  const selectHandler = (value) => {
    setSelectPrice(value);
  };

  const pricingObj = [
    {
      id: 2,
      title: "Base",
      description:
        "For growing businesses looking to handle their sales better",
      planTitle:
        (selectPrice === "monthly" && "10") ||
        (selectPrice === "quarterly" && "25"),
      planTime:
        (selectPrice === "monthly" && "Monthly") ||
        (selectPrice === "quarterly" && "Quarterly"),
      inclueds: ["Comprehensive Analysis", "Daily Guidance", "Full Report"],
    },
    {
      id: 3,
      title: "Premium",
      description: "For bigger businesses looking to sell more efficiently",
      planTitle:
        (selectPrice === "monthly" && "30") ||
        (selectPrice === "quarterly" && "45"),
      planTime:
        (selectPrice === "monthly" && "Monthly") ||
        (selectPrice === "quarterly" && "Quarterly"),
      inclueds: [
        "Daily Love Dynamics",
        "Daily Financial Strategy",
        "Exclusive Insights",
      ],
    },
  ];

  return (
    <div className="bg-gray-50 py-32">
      <div className="mycontainer">
        <TextAnimation
          letters={[
            {
              letter: "Our",
              delay: "0",
            },
            {
              letter: "Affordable",
              delay: "0.20",
            },
          ]}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center"
          textCenter
        />
        <TextAnimation
          letters={[
            {
              letter: "Fair",
              delay: "0.40",
            },
            {
              letter: "Pricing",
              delay: "0.60",
            },
          ]}
          className={
            "text-4xl md:text-5xl lg:text-6xl font-semibold text-my-blue text-center"
          }
          textCenter
        />
        <div className="bg-gray-100 flex w-60 mx-auto p-1 rounded-full mt-20 relative">
          <p
            className={
              selectPrice === "monthly"
                ? "bg-white text-xl rounded-full p-4 shadow-lg cursor-pointer font-semibold text-my-blue w-6/12 text-center"
                : "text-xl rounded-full p-4 w-6/12 text-center cursor-pointer"
            }
            onClick={() => selectHandler("monthly")}
          >
            Monthly
          </p>
          <div className="absolute -right-0 top-16 md:-right-28 md:top-4 flex gap-2 items-center">
            <Image src={ArrowPhoto} alt="" />
            <p className="text-lg font-semibold">5% off</p>
          </div>
        </div>
        <div className="flex gap-5 flex-wrap justify-center mt-10">
          <Fade bottom>
            {pricingObj.map((el) => (
              <PricingItem pricingObj={el} key={el.id} />
            ))}
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Index;
