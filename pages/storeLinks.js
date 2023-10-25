import Headers from "@/components/Headers";
import Categories from "@/components/Headers/Categories";
import StoreLinksIntro from "@/components/StoreLinksIntro";
import Testimonials from "@/components/Testimonials";
import HowToUse from "@/components/HowToUse";
import WhatYouGet from "@/components/WhatYouGet";
import LoveToMerge from "@/components/LoveToMerge";
import BuildForGrowth from "@/components/BuildForGrowth";
import NotConvinced from "@/components/NotConvinced";
import GswSl from "@/components/GswSl";
import Footer from "@/components/Footer";

const StoreLinks = () => {
  return (
    <>
      <Headers />
      <Categories />
      <StoreLinksIntro />
      <Testimonials storeLinks />
      <HowToUse />
      <WhatYouGet />
      <LoveToMerge />
      <BuildForGrowth />
      <NotConvinced />
      <GswSl />
      <Footer />
    </>
  );
};

export default StoreLinks;
