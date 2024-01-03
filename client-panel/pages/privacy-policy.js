import Headers from "@/components/Headers";
import Categories from "@/components/Headers/Categories";
import Footer from "@/components/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const privacy = () => {
  return (
    <>
      <Headers />
      <Categories />
      <div>
        <p className="text-center text-3xl text-white bg-gray-800 py-16">
          Terms of Use
        </p>
        <div className="sm:max-w-[640px] w-full px-[30px] mx-auto my-20">
          <p>
            All calculations and/or interpretations purchased through our chart
            service department or supplied free of charge at our website are
            intended for entertainment purposes only. Astro-Charts assumes no
            liability for any decisions made based on output from our programs,
            chart report services or free chart services. In no event will
            Astro-Charts be liable to you or any party for any damages,
            including any lost profits, lost savings or other incidental or
            consequential damages arising out of the use of the information
            provided to you in one of our paid or free chart services.
          </p>
          <br />
          <p>{`Astro-charts.com asks for a name and email address when you register with Astro-charts and when you buy an Astro-chart's product. The name provided is arbitrary and is provided without context of an individual identity. When you register with Astro-charts and sign in to our services, we can only identify you through the email address you have provided.`}</p>
          <br />
          <p>
            All information provided by you when you register with us or buy a
            product from us is not shared with any third-parties. All
            information provided by you for use of our tools is not shared with
            any third-parties.
          </p>
          <br />
          <p>
            Astro-charts automatically receives and records your software and
            hardware attributes from your computer and browser and the page you
            request information using Google Analytics. This is used for the
            following general purposes: improving our services and conducting
            research.
          </p>
          <br />
          <p>
            We use an internal cookie that tracks when you add a shop item to
            your cart. This is its only function.
          </p>
          <br />
          <p>
            Astro-Charts is not a guaranteed backup of the information given. Do
            not use Astro-Charts as your only storage location for astrology
            charts or personal data.
          </p>
          <br />
          <p>
            These terms and conditions are governed by the laws of the United
            States of America and the laws of the State of Nevada.
          </p>
          <br />
          <small>Copyright © 2023 myfate.com</small>
        </div>
      </div>
      <Footer />
    </>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "subMenus",
        "footer",
        "common",
      ])),
    },
  };
}

export default privacy;
