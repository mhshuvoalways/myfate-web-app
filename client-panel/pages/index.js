import Headers from "@/components/Headers";
import Categories from "@/components/Headers/Categories";
import StoreLinksIntro from "@/components/Intro";
import HowToUse from "@/components/HowToUse";
import Resources from "@/components/Resources";
import WhatYouGet from "@/components/WhatYouGet";
import OwnerSaysCatelog from "@/components/OwnerSaysCatelog";
import Pricing from "@/components/Pricing";
import LoveToMerge from "@/components/LoveToMerge";
import GswSl from "@/components/GswSl";
import NotConvinced from "@/components/NotConvinced";
import Faq from "@/components/Faq";
import Motivation from "@/components/Motivation";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Pic1 from "@/public/howtoget/t1.png";
import Pic2 from "@/public/howtoget/t2.png";
import Pic3 from "@/public/howtoget/t3.png";
import Pic4 from "@/public/howtoget/t4.png";

const fullreport = [
  {
    description:
      "Full report: Full overview of your total life. What are you born with?",
    image: Pic1,
    type: "fullreport",
  },
  {
    description:
      "Love: Full love overview of your total life. Who will you meet?",
    image: Pic2,
    type: "fullreport",
  },
  {
    description:
      "Finance: Full finance overview of your total life. How much will you earn?",
    image: Pic3,
    type: "fullreport",
  },
  {
    description:
      "Learning: Full academic overview of your total life. How and what will you learn?",
    image: Pic4,
    type: "fullreport",
  },
];

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    const detectLocation = navigator.language || navigator.languages;
    // console.log(navigator);
    if (detectLocation.includes("en")) {
      // router.push("/en");
    } else {
      // router.push("/jp");
    }
  }, []);

  return (
    <>
      <Headers />
      <Categories />
      <StoreLinksIntro />
      <OwnerSaysCatelog home />
      <WhatYouGet />
      <HowToUse pageType={fullreport} />
      <Resources />
      <LoveToMerge />
      <Pricing />
      <Faq />
      <Motivation />
      <NotConvinced />
      <GswSl />
      <Footer />
    </>
  );
};

export default Index;
