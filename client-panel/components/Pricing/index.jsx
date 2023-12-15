import { Fade } from "react-reveal";
import TextAnimation from "../Utils/TextAnimation";
import PricingItem from "./PricingItem";

const Index = () => {
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

  return (
    <div className="bg-gray-50 py-32">
      <div className="mycontainer">
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
          className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center"
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
