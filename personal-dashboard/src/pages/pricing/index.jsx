import { useState } from "react";
import PricingItem from "./PricingItem";
import ArrowPhoto from "../../../public/arrow.svg";

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
        (selectPrice === "monthly" && "NGN 2,350") ||
        (selectPrice === "quarterly" && "NGN 6,695"),
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
        (selectPrice === "monthly" && "NGN 6,750") ||
        (selectPrice === "quarterly" && "NGN 19,235"),
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
    <div className="text-[#ddd]">
      <div>
        <div className="bg-[#384256] flex w-60 mx-auto p-1 rounded-full relative">
          <p
            className={
              selectPrice === "monthly"
                ? "bg-[#ddd] text-[#384256] text-xl rounded-full p-4 shadow-lg cursor-pointer font-semibold text-my-blue w-6/12 text-center"
                : "text-xl rounded-full p-4 w-6/12 text-center cursor-pointer"
            }
            onClick={() => selectHandler("monthly")}
          >
            Monthly
          </p>
          <p
            className={
              selectPrice === "quarterly"
                ? "bg-[#ddd] text-[#384256] text-xl rounded-full p-4 shadow-lg cursor-pointer font-semibold text-my-blue w-6/12 text-center"
                : "text-xl rounded-full p-4 w-6/12 text-center cursor-pointer"
            }
            onClick={() => selectHandler("quarterly")}
          >
            Quarterly
          </p>
          <div className="absolute -right-0 top-16 md:-right-28 md:top-4 flex gap-2 items-center">
            <img src={ArrowPhoto} alt="" />
            <p className="text-lg font-semibold">5% off</p>
          </div>
        </div>
        <div className="flex gap-5 flex-wrap justify-center mt-10">
          <PricingItem pricingObj={pricingObj[0]} />
          <PricingItem pricingObj={pricingObj[1]} />
          <PricingItem pricingObj={pricingObj[2]} />
        </div>
      </div>
    </div>
  );
};

export default Index;