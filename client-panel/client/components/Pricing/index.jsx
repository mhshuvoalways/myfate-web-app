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
      title: "Starter",
      description: "For businesses just starting out with few products",
      planTitle: "Free",
      planTime: "Forever",
      inclueds: [
        "One Store",
        "Store Link",
        "Upload up to 10 Products",
        "Manage Orders & Customers",
        "Manage Discounts",
        "Search Engine Optimization",
        "Payments and Invoices",
        "Bank Account (NG)",
        "SMS Marketing [soon]",
      ],
    },
    {
      id: 2,
      title: "Basic",
      description:
        "For growing businesses looking to handle their sales better",
      planTitle:
        (selectPrice === "monthly" && "2,350") ||
        (selectPrice === "quarterly" && "6,695"),
      planTime:
        (selectPrice === "monthly" && "Monthly") ||
        (selectPrice === "quarterly" && "Quarterly"),
      inclueds: [
        "Everything in Starter",
        "Customizable Store Link",
        "Upload up to 100 Products",
        "Manage Product Options",
        "Manage Discounts & Coupons",
        "Generate Receipts from Orders",
        "Book Deliveries",
        "Store Customizations [soon]",
        "Upload Products from Instagram [soon]",
        "AI Product Optimization [soon]",
        "Spend Management [soon]",
      ],
    },
    {
      id: 3,
      title: "Business+",
      description: "For bigger businesses looking to sell more efficiently",
      planTitle:
        (selectPrice === "monthly" && "6,750") ||
        (selectPrice === "quarterly" && "19,235"),
      planTime:
        (selectPrice === "monthly" && "Monthly") ||
        (selectPrice === "quarterly" && "Quarterly"),
      inclueds: [
        "Everything in Basic",
        "Upload Unlimited Products",
        "Unlimited Stores in one Account",
        "Multiple Store Managers",
        "Sell in Multiple Currencies",
        "Custom Domain Names [soon]",
        "Advanced Store Customizations [soon]",
        "Advanced Analytics [soon]",
        "Facebook Pixel Tracking [soon]",
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
          <p
            className={
              selectPrice === "quarterly"
                ? "bg-white text-xl rounded-full p-4 shadow-lg cursor-pointer font-semibold text-my-blue w-6/12 text-center"
                : "text-xl rounded-full p-4 w-6/12 text-center cursor-pointer"
            }
            onClick={() => selectHandler("quarterly")}
          >
            Quarterly
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
