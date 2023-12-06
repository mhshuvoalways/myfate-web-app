const customers = [
  {
    name: "South Korean",
    logo: "https://flagcdn.com/w320/kr.png",
    storeLink: "https://goo.gl/maps/7ecjaJXefjAQhxjGA",
  },
  {
    name: "India",
    logo: "https://flagcdn.com/w320/in.png",
    storeLink: "https://goo.gl/maps/WSk3fLwG4vtPQetp7",
  },
  {
    name: "Japan",
    logo: "https://flagcdn.com/w320/jp.png",
    storeLink: "https://goo.gl/maps/NGTLSCSrA8bMrvnX9",
  },
  {
    name: "Bernadines Bistro",
    logo: "https://res.cloudinary.com/catlog/image/upload/c_scale,w_100/v1670305498/website-store-logos/bernadines.webp",
    storeLink: "https://catlog.shop/pfbjxwquk5xsde82",
  },
  {
    name: "QueenChic",
    logo: "https://res.cloudinary.com/catlog/image/upload/c_scale,w_100/v1670305497/website-store-logos/queen-chic.webp",
    storeLink: "https://catlog.shop/queenchicfancy",
  },
  {
    name: "Foodie24",
    logo: "https://res.cloudinary.com/catlog/image/upload/c_scale,w_100/v1670305498/website-store-logos/foodie24.webp",
    storeLink: "https://catlog.shop/foodie24",
  },
  {
    name: "Body Bang",
    logo: "https://res.cloudinary.com/catlog/image/upload/c_scale,w_100/v1670305497/website-store-logos/body-bang",
    storeLink: "https://www.catlog.shop/bodybang",
  },
  {
    name: "All the Eves",
    logo: "https://res.cloudinary.com/catlog/image/upload/c_scale,w_100/v1670305497/website-store-logos/all-theeves",
    storeLink: "https://www.catlog.shop/alltheeves",
  },
  {
    name: "Gray Hub",
    logo: "https://res.cloudinary.com/catlog/image/upload/c_scale,w_100/v1670305497/website-store-logos/gray-hub",
    storeLink: "https://www.catlog.shop/j17izwrm",
  },
  {
    name: "Killz Bites",
    logo: "https://res.cloudinary.com/catlog/image/upload/c_scale,w_100/v1670305497/website-store-logos/killz-bites",
    storeLink: "https://www.catlog.shop/v9xzi3q7",
  },
  {
    name: "Steady Gadgets",
    logo: "https://res.cloudinary.com/catlog/image/upload/c_scale,w_100/v1670305497/website-store-logos/steady-gadgets",
    storeLink: "https://www.catlog.shop/steady-gadgets",
  },
  {
    name: "Feli’s bulk food services",
    logo: "https://res.cloudinary.com/catlog/image/upload/c_scale,w_100/v1670305497/website-store-logos/felis-bulk-food",
    storeLink: "https://www.catlog.shop/etzpb8qs",
  },
  {
    name: "Shop Dichie",
    logo: "https://res.cloudinary.com/catlog/image/upload/c_scale,w_100/v1670305498/website-store-logos/shop-dichie.webp",
    storeLink: "https://catlog.shop/shopdichewear",
  },
  {
    name: "Delta Food",
    logo: "https://res.cloudinary.com/catlog/image/upload/c_scale,w_100/v1670305497/website-store-logos/delta-relish.webp",
    storeLink: "https://catlog.shop/deltafoodng",
  },
  {
    name: "SV Lunchbox and Cocktails",
    logo: "https://res.cloudinary.com/catlog/image/upload/c_scale,w_100/v1670305497/website-store-logos/sv-lunch-box.webp",
    storeLink: "https://catlog.shop/svlunchbox",
  },
  {
    name: "Zani's Cafe",
    logo: "https://res.cloudinary.com/catlog/image/upload/c_scale,w_100/v1670305497/website-store-logos/zanis-cafe.webp",
    storeLink: "https://www.catlog.shop/zanis_cafe_productslist",
  },
  {
    name: "Debe Empire",
    logo: "https://res.cloudinary.com/catlog/image/upload/c_scale,w_100/v1670305497/website-store-logos/debe-empire",
    storeLink: "https://catlog.shop/debeempire",
  },
  {
    name: "Bikegearng",
    logo: "https://res.cloudinary.com/catlog/image/upload/c_scale,w_100/v1670305497/website-store-logos/bike-gear-ng",
    storeLink: "https://catlog.shop/bikegearng",
  },
  {
    name: "Grooveoutlets",
    logo: "https://res.cloudinary.com/catlog/image/upload/c_scale,w_100/v1670305497/website-store-logos/groove-outlets",
    storeLink: "https://catlog.shop/grooveoutlets",
  },
  {
    name: "Benguy Fashion",
    logo: "https://res.cloudinary.com/catlog/image/upload/c_scale,w_100/v1670305497/website-store-logos/benguy-fashion",
    storeLink: "https://www.catlog.shop/benguyfashion",
  },
  {
    name: "Flirt Fits",
    logo: "https://res.cloudinary.com/catlog/image/upload/c_scale,w_100/v1670305497/website-store-logos/flirt-fits",
    storeLink: "https://catlog.shop/flirtfits",
  },
  {
    name: "To’phyn naturals",
    logo: "https://res.cloudinary.com/catlog/image/upload/c_scale,w_100/v1670305497/website-store-logos/tophyn-naturals",
    storeLink: "https://www.catlog.shop/tophynnaturals1",
  },
  {
    name: "Resolute",
    logo: "https://res.cloudinary.com/catlog/image/upload/c_scale,w_100/v1670305497/website-store-logos/resolute",
    storeLink: "https://catlog.shop/g3h3gka7",
  },
  {
    name: "Kelly's Empire",
    logo: "https://res.cloudinary.com/catlog/image/upload/c_scale,w_100/v1670305497/website-store-logos/kellys-empire",
    storeLink: "https://www.catlog.shop/ajmjf58j",
  },
  {
    name: "Shopvams",
    logo: "https://res.cloudinary.com/catlog/image/upload/c_scale,w_100/v1670305498/website-store-logos/shop-vams.webp",
    storeLink: "https://catlog.shop/shopvams",
  },
  {
    name: "ShopTrav",
    logo: "https://res.cloudinary.com/catlog/image/upload/c_scale,w_100/v1670305498/website-store-logos/shoptrav.webp",
    storeLink: "https://catlog.shop/695u66wtlj6be4f2",
  },
];

import LazyImage from "../Utils/LazyImage";
import Link from "next/link";

const ContentScroller = () => {
  return (
    <div className="w-full mt-32">
      <p className="font-semibold text-3xl text-center w-10/12 mx-auto">
        Millions of Saju users
      </p>
      <p className="font-semibold text-center w-10/12 mx-auto mb-20 mt-5">
        Trusted by thousands of Merchants
      </p>
      <div
        className={`flex marquee-container full relative h-14 sm:h-16 md:h-20 left-0`}
      >
        <ScrollerList customers={customers} index={0} />
        <ScrollerList customers={customers} index={1} />
      </div>
    </div>
  );
};

const ScrollerList = ({ customers, index }) => {
  return (
    <ul
      className={`flex items-center justify-between mx-auto py-2 px-[5.5vw] sm:px-[4.5vw] lg:py-3 lg:px-[3.5vw] xl:px-[3.8vw] marquee ${
        index === 1 ? "marquee2" : ""
      }`}
    >
      {customers?.map((customer, i) => (
        <li className="py-1.5" key={i}>
          <Link
            href={customer.storeLink}
            target="_blank"
            rel="noreferrer"
            className="relative flex flex-col items-center"
          >
            <div className="h-11 sm:h-12 md:h-16 w-11 sm:w-12 md:w-16 flex-shrink-0 rounded-full overflow-hidden border-4 border-[#e5e5e5] border-opacity-30 customer-card">
              <LazyImage
                imgSrc={customer.logo}
                alt={customer.name}
                className="h-full w-full object-cover"
                loaderClasses="rounded-full"
              />
            </div>
            <div className="absolute top-[120%] bg-black text-sm font-medium text-white px-2 py-1 rounded-2xl transform translate-y-2 -translate-x-1/2 ease-out duration-200 opacity-0 pointer-events-none customer-card-name left-1/2">
              {customer.name}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ContentScroller;
