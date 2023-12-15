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
      title: "Pro",
      description: "For anyone who wants to know deeper about themselves",
      planTitle: 30,
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
      title: "Premium",
      description:
        "For anyone who wants to get a personalized analysis from a doctor who has been in Sajoo for decades",
      planTitle: 150,
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
      title: "Premium Max",
      description:
        "For anyone who wants to get a personalized+ analysis from a doctor who has been in Sajoo for decades",
      planTitle: 300,
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
      <div className="mycontainer flex justify-center items-center py-24">
        <div>
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
