import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Img1 from "@/public/horoscope/1.png";
import Img2 from "@/public/horoscope/2.png";
import Img3 from "@/public/horoscope/3.png";

const Index = () => {
  useEffect(() => {
    const preferredLanguage =
      typeof window !== "undefined" && localStorage.getItem("language");
    if (!preferredLanguage) {
      const browserLanguage = "en";
      const userLanguage = window.confirm("Switch to Japan?")
        ? "jp"
        : browserLanguage;
      typeof window !== "undefined" &&
        localStorage.setItem("language", userLanguage);
    }
  }, []);

  return (
    <div className="mycontainer mt-10 mb-20">
      <div className="flex justify-center lg:justify-between gap-10 flex-wrap md:flex-nowrap items-center space-y-5">
        <div className="space-y-2 -mb-5 w-full md:w-4/12">
          <Link href={"/horoscope/form?type=2024"}>
            <Image src={Img3} alt="" className="w-full mb-2 rounded-2xl" />
            <div className="space-y-1">
              <p className="font-semibold">2024 Finance Horoscope</p>
              <p className="text-sm">2024 Finance Horoscope</p>
              <div className="flex gap-2 pt-2">
                <small className="bg-[#06243F] text-white py-1 px-2 rounded-md font-semibold">
                  NEW
                </small>
                <small className="bg-[#5E17EB] text-white py-1 px-2 rounded-md font-semibold">
                  HOT
                </small>
              </div>
            </div>
          </Link>
        </div>
        <div className="space-y-2 -mb-5 w-full md:w-4/12">
          <Link href={"/horoscope/form?type=2024love"}>
            <Image src={Img2} alt="" className="w-full mb-2 rounded-2xl" />
            <div className="space-y-1">
              <p className="font-semibold">2024 Finance Love</p>
              <p className="text-sm">2024 Finance Love</p>
              <div className="flex gap-2 pt-2">
                <small className="bg-[#06243F] text-white py-1 px-2 rounded-md font-semibold">
                  NEW
                </small>
                <small className="bg-[#5E17EB] text-white py-1 px-2 rounded-md font-semibold">
                  HOT
                </small>
              </div>
            </div>
          </Link>
        </div>
        <div className="space-y-2 -mb-5 w-full md:w-4/12">
          <Link href={"/horoscope/form?type=2024finance"}>
            <Image src={Img1} alt="" className="w-full mb-2 rounded-2xl" />
            <div className="space-y-1">
              <p className="font-semibold">2024 Finance Horoscope</p>
              <p className="text-sm">2024 Finance Horoscope</p>
              <div className="flex gap-2 pt-2">
                <small className="bg-[#06243F] text-white py-1 px-2 rounded-md font-semibold">
                  NEW
                </small>
                <small className="bg-[#5E17EB] text-white py-1 px-2 rounded-md font-semibold">
                  HOT
                </small>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
