import { Fade } from "react-reveal";
import { useTranslation } from "next-i18next";
import TextAnimation from "../Utils/TextAnimation";
import PricingItem from "./PricingItem";

const Index = () => {
  const { t } = useTranslation("pricing");
  const title1 = t("title");
  const title2 = t("title2");
  const pricingObj = t("pricingObj", { returnObjects: true });

  return (
    <div className="bg-gray-50 py-32">
      <div className="mycontainer">
        <TextAnimation
          letters={[
            {
              letter: title1.split(" ")[0],
              delay: "0",
            },
            {
              letter: title1.split(" ")[1],
              delay: "0.10",
            },
          ]}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center"
          textCenter
        />
        <TextAnimation
          letters={[
            {
              letter: title2.split(' ')[0],
              delay: "0.30",
            },
            {
              letter: title2.split(' ')[1],
              delay: "0.40",
            },
            {
              letter: title2.split(' ')[2],
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
