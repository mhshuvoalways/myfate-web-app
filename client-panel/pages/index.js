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
      <HowToUse />
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
