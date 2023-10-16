import Headers from "@/components/Headers";
import Categories from "@/components/Headers/Categories";
import PricingIntro from "@/components/PricingIntro";
import OwnerSaysCatelog from "@/components/OwnerSaysCatelog";
import Faq from "@/components/Faq";
import WhatSellCtlog from "@/components/WhatSellCtlog";
import StayUpdCtlog from "@/components/StayUpdCtlog";
import GswSl from "@/components/GswSl";

const Pricing = () => {
  return (
    <>
      <Headers />
      <Categories />
      <PricingIntro />
      <OwnerSaysCatelog />
      <Faq />
      <WhatSellCtlog />
      <StayUpdCtlog />
      <GswSl pricing />
    </>
  );
};

export default Pricing;
