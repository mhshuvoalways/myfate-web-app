import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
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

const About = () => {
  const { t } = useTranslation("howtouse");
  const howtouse = t("howtouse", { returnObjects: true });

  return (
    <>
      <Headers />
      <Categories />
      <StoreLinksIntro />
      <Testimonials storeLinks />
      <HowToUse howtouse={howtouse} pageType={howtouse.fullreport} />
      <WhatYouGet />
      <LoveToMerge />
      <BuildForGrowth />
      <NotConvinced />
      <GswSl />
      <Footer />
    </>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "convince",
        "footer",
        "gswsl",
        "lovefates",
        "subMenus",
        "whatyouget",
        "howtouse",
        "common",
      ])),
    },
  };
}

export default About;
