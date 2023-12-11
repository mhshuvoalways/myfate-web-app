import ArrowDown from "@/public/buildgrowth/arrowDown.svg";
import Nigeria from "@/public/flag/ng.png";
import ArrowPhoto from "@/public/pricing/arrow.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import PricingItem from "../Pricing/PricingItem";
import TextAnimation from "../Utils/TextAnimation";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import notiAction from "@/store/actions/notiAction";

const Index = () => {
  const [selectPrice, setSelectPrice] = useState("monthly");

  const router = useRouter();
  const dispatch = useDispatch();

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
      inclueds: ["Fun Tests", "Celebrity Insights", "Free Access"],
    },
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
  useEffect(() => {
    if (router.query.suggest === "payment") {
      dispatch(notiAction("Please make a payment to connect to the future"));
    }
  }, [dispatch, router.query.suggest]);

  return (
    <div className="storeLinksIntro relative">
      <div className="mycontainer flex justify-center items-center py-10">
        <div>
          <div className="flex items-center bg-white py-2 px-3 cursor-pointer shadow-sm justify-between rounded-full w-44 mx-auto my-8">
            <Image src={Nigeria} alt="" className="w-9 h-9 rounded-full" />
            <p className="text-xl font-semibold text-gray-500">Nigeria</p>
            <Image src={ArrowDown} alt="" className="w-4 h-4 rounded-full" />
          </div>
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
            className="text-4xl md:text-5xl lg:text-7xl"
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
            className="text-4xl md:text-5xl lg:text-7xl font-semibold text-my-blue"
            textCenter
          />
          <div className="bg-gray-100 flex w-60 mx-auto p-1 rounded-full mt-10 relative">
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
          <div className="flex gap-5 justify-center flex-wrap mt-10">
            <Fade bottom>
              <PricingItem pricingObj={pricingObj[0]} />
              <PricingItem pricingObj={pricingObj[1]} />
              <PricingItem pricingObj={pricingObj[2]} />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
