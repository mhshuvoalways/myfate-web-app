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
      id: 1,
      title: "Base",
      description:
        "For growing businesses looking to handle their sales better",
      planTitle: 10,
      inclueds: ["Comprehensive Analysis", "Daily Guidance", "Full Report"],
    },
    {
      id: 2,
      title: "Premium",
      description: "For bigger businesses looking to sell more efficiently",
      planTitle: 30,
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
