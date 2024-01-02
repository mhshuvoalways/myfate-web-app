import Image from "next/image";
import Link from "next/link";
import AppLogo from "@/public/footer/app.svg";

const index = () => {
  return (
    <div className="bg-[#050537] py-20">
      <div className="flex gap-20 flex-wrap mycontainer">
        <div>
          <Link href="/">
            <Image
              src="/footer/logo.png"
              alt=""
              width={500}
              height={500}
              className="w-56"
            />
          </Link>
          <p className="text-sm text-grey-fields-100 mt-3.75 max-w-[295px] md:max-w-[285px]">
            Take a look into your advanced horoscope report with our service.
            Get to know you better.
          </p>
          <figure className="mt-5 sm:mt-6.25">
            <Image src={AppLogo} alt="My Fate app download banner" />
          </figure>
        </div>
        <ul>
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
  );
};

export default index;
