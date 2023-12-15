import ArrowDown from "@/public/buildgrowth/arrowDown.svg";
import Nigeria from "@/public/flag/ng.png";
import Image from "next/image";
import { useEffect } from "react";
import PricingItem from "../Pricing/PricingItem";
import TextAnimation from "../Utils/TextAnimation";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import notiAction from "@/store/actions/notiAction";

const Index = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const pricingObj = [
    {
      id: 1,
      title: "Pro plan",
      description: "For anyone who wants to know deeper about themselves",
      planTitle: 35,
      inclueds: [
        "Life Total Analysis",
        "Life Advice",
        "Romance Compatibility Analysis",
        "Ideal Partner Analysis",
        "Financial Analysis",
        "Financial Risk Analysis",
        "Academic Advice",
        "Personalized Daily Energy Overview",
        "Personalized Daily Romance Overview",
        "Personalized Daily Finance Overview",
        "Daily Sayings",
        "Daily Prayers",
      ],
    },
    {
      id: 2,
      title: "Premium plan",
      description:
        "For anyone who wants to get a personalized analysis from a doctor who has been in Sajoo for decades",
      planTitle: 185,
      inclueds: [
        "Doctor’s Full Analysis once a month",
        "Life Total Analysis",
        "Life Advice",
        "Romance Compatibility Analysis",
        "Ideal Partner Analysis",
        "Financial Analysis",
        "Financial Risk Analysis",
        "Academic Advice",
        "Personalized Daily Energy Overview",
        "Personalized Daily Romance Overview",
        "Personalized Daily Finance Overview",
        "Daily Sayings",
        "Daily Prayers",
      ],
    },
    {
      id: 3,
      title: "Premium Max plan",
      description:
        "For anyone who wants to get a personalized+ analysis from a doctor who has been in Sajoo for decades",
      planTitle: 285,
      inclueds: [
        "Doctor’s Full Analysis twice a month",
        "Doctor’s Q&A",
        "Maximum Details",
        "Life Total Analysis",
        "Life Advice",
        "Romance Compatibility Analysis",
        "Ideal Partner Analysis",
        "Financial Analysis",
        "Financial Risk Analysis",
        "Academic Advice",
        "Personalized Daily Energy Overview",
        "Personalized Daily Romance Overview",
        "Personalized Daily Finance Overview",
        "Daily Sayings",
        "Daily Prayers",
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
                letter: "Tiny",
                delay: "0",
              },
              {
                letter: "Investment",
                delay: "0.10",
              },
            ]}
            className="text-4xl md:text-5xl lg:text-7xl"
            textCenter
          />
          <TextAnimation
            letters={[
              {
                letter: "And",
                delay: "0.30",
              },
              {
                letter: "Get",
                delay: "0.40",
              },
              {
                letter: "Everything",
                delay: "0.50",
              },
            ]}
            className="text-4xl md:text-5xl lg:text-7xl font-semibold text-my-blue"
            textCenter
          />
          <div className="flex gap-5 justify-center flex-wrap mt-10">
            {pricingObj.map((el) => (
              <PricingItem pricingObj={el} key={el.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
