import Image from "next/image";
import Link from "next/link";
import AppLogo from "@/public/footer/app.svg";

const index = () => {
  return (
    <div className="bg-[#050537] py-10">
      <div className="flex items-start justify-between flex-wrap mycontainer">
        <div className="flex flex-col mr-8 mb-12.5">
          <Link href="/">
            <p className="text-2xl text-my-gold">My Fate</p>
          </Link>
          <p className="text-sm text-grey-fields-100 mt-3.75 max-w-[295px] md:max-w-[285px]">
            Take orders via chat, manage your business &amp; get paid seamlessly
            with Catlog
          </p>
          <figure className="mt-5 sm:mt-6.25">
            <Image src={AppLogo} alt="Catlog app download banner" />
          </figure>
        </div>
        <div className="flex items-start flex-wrap justify-around flex-1 max-w-[700px] md:min-w-[450px]">
          <ul className="flex flex-col flex-1 mr-8 pb-6.25">
            <li className="uppercase text-grey-border-dark text-xs md:text-1xs lg:text-sm mb-4.5 sm:mb-6.25">
              Usefull Links
            </li>
            <li className="mb-2.5 md:mb-3.75 flex items-center">
              <Link
                href="/privacy"
                className="text-grey-fields-100 hover:text-accent-yellow-500 font-medium text-1sm md:text-base whitespace-nowrap cursor-pointer"
              >
                Privacy
              </Link>
            </li>
            <li className="mb-2.5 md:mb-3.75 flex items-center">
              <Link
                href="/terms-of-service"
                className="text-grey-fields-100 hover:text-accent-yellow-500 font-medium text-1sm md:text-base whitespace-nowrap cursor-pointer"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col flex-1 mr-8 pb-6.25">
            <li className="uppercase text-grey-border-dark text-xs md:text-1xs lg:text-sm mb-4.5 sm:mb-6.25">
              Usefull Links
            </li>
            <li className="mb-2.5 md:mb-3.75 flex items-center">
              <Link
                href="/privacy"
                className="text-grey-fields-100 hover:text-accent-yellow-500 font-medium text-1sm md:text-base whitespace-nowrap cursor-pointer"
              >
                Privacy
              </Link>
            </li>
            <li className="mb-2.5 md:mb-3.75 flex items-center">
              <Link
                href="/terms-of-service"
                className="text-grey-fields-100 hover:text-accent-yellow-500 font-medium text-1sm md:text-base whitespace-nowrap cursor-pointer"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col flex-1 mr-8 pb-6.25">
            <li className="uppercase text-grey-border-dark text-xs md:text-1xs lg:text-sm mb-4.5 sm:mb-6.25">
              Usefull Links
            </li>
            <li className="mb-2.5 md:mb-3.75 flex items-center">
              <Link
                href="/privacy"
                className="text-grey-fields-100 hover:text-accent-yellow-500 font-medium text-1sm md:text-base whitespace-nowrap cursor-pointer"
              >
                Privacy
              </Link>
            </li>
            <li className="mb-2.5 md:mb-3.75 flex items-center">
              <Link
                href="/terms-of-service"
                className="text-grey-fields-100 hover:text-accent-yellow-500 font-medium text-1sm md:text-base whitespace-nowrap cursor-pointer"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default index;
