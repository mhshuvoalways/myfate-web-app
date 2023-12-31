import Headers from "@/components/Headers";
import Categories from "@/components/Headers/Categories";
import StoreLinksIntro from "@/components/StoreLinksIntro";
import HowToUse from "@/components/HowToUse";
import WhatYouGet from "@/components/WhatYouGet";
import LoveToMerge from "@/components/LoveToMerge";
import Pricing from "@/components/Pricing";
import NotConvinced from "@/components/NotConvinced";
import GswSl from "@/components/GswSl";
import Footer from "@/components/Footer";
import Pic5 from "@/public/howtoget/t5.png";
import Pic6 from "@/public/howtoget/t6.png";
import Pic7 from "@/public/howtoget/t7.png";
import Pic8 from "@/public/howtoget/t8.png";

const StoreLinks = () => {
  const dailyfate = [
    {
      description:
        "Energy: Full overview of your daily energy. Are you full with energy today?",
      image: Pic5,
      type: "dailyfate",
    },
    {
      description:
        "Mood: Full overview of your daily mood. How will you feel today?",
      image: Pic6,
      type: "dailyfate",
    },
    {
      description:
        "Focus: Full overview of your daily focus. Foresee your focus power.",
      image: Pic7,
      type: "dailyfate",
    },

    {
      description:
        "Spirit: Full overview of your daily spirit. Are you full with spirit today?",
      image: Pic8,
      type: "dailyfate",
    },
  ];

  return (
    <>
      <Headers />
      <Categories />
      <StoreLinksIntro titleText="Daily Destiny Alignment" />
      <HowToUse pageType={dailyfate} />
      <WhatYouGet />
      <LoveToMerge />
      <NotConvinced />
      <Pricing />
      <GswSl />
      <Footer />
    </>
  );
};

export default StoreLinks;
