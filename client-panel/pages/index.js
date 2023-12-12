import Headers from "@/components/Headers";
import Categories from "@/components/Headers/Categories";
import StoreLinksIntro from "@/components/Intro";
import HowToUse from "@/components/HowToUse";
import BuildForGrowth from "@/components/BuildForGrowth";
import WhatYouGet from "@/components/WhatYouGet";
import OwnerSaysCatelog from "@/components/OwnerSaysCatelog";
import Pricing from "@/components/Pricing";
import LoveToMerge from "@/components/LoveToMerge";
import GswSl from "@/components/GswSl";
import NotConvinced from "@/components/NotConvinced";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Headers />
      <Categories />
      <StoreLinksIntro />
      <OwnerSaysCatelog home/>
      <WhatYouGet />
      <HowToUse />
      <LoveToMerge />
      <BuildForGrowth />
      <Pricing />
      <Faq />
      <NotConvinced />
      <GswSl />
      <Footer />
    </>
  );
};

export default Index;
