import { motion } from "framer-motion";
import Homebg from "@/public/intro/homebg.png";
import Image from "next/image";
import { Link as ScrollList } from "react-scroll";
import Link from "next/link";
import AnimationText from "../Utils/TextAnimation";
import Button from "../common/Button";
import ArrowRight from "@/public/buildgrowth/arrowRight.svg";

const index = () => {
  return (
    <div className="bg-[#FFFAF3] pt-20">
      <div className="flex justify-center items-center mycontainer">
        <div className="space-y-8">
          <AnimationText
            className="text-[48px] leading-[56px] lg:text-[96px] lg:leading-[112px] font-semibold break-words"
            textCenter
            letters={[
              {
                letter: "MyFates",
                delay: "0.5",
              },
              {
                letter: "Future",
                delay: "0.25",
              },
              {
                letter: "Connection",
                delay: "0.35",
              },
            ]}
          />
          <AnimationText
            className="text-[18px] lg:text-[20px] text-my-blue font-semibold"
            textCenter
            letters={[
              {
                letter: "Connect",
                delay: "0.55",
              },
              {
                letter: "with",
                delay: "0.65",
              },
              {
                letter: "your",
                delay: "0.75",
              },
              {
                letter: "future",
                delay: "0.75",
              },
              {
                letter: "with",
                delay: "0.85",
              },
              {
                letter: "us",
                delay: "0.95",
              },
            ]}
          />
          <div className="mt-10 flex gap-2 justify-center items-center flex-wrap">
            <Link href={"/pricing"}>
              <div>
                <Button value={"Start your journey"} btnCenter className={""} />
              </div>
            </Link>
            <ScrollList to={"reports"} smooth spy>
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="py-3 font-semibold hover:rounded-full transition-all rounded px-10 flex items-center gap-2"
              >
                <p className="text-black">See our Reports</p>
                <Image src={ArrowRight} alt="" />
              </motion.button>
            </ScrollList>
          </div>
          <Image src={Homebg} alt="" className="pt-20" />
        </div>
      </div>
    </div>
  );
};

export default index;
