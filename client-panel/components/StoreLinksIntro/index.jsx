import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollList } from "react-scroll";
import TextAnimation from "../Utils/TextAnimation";
import StoreFrontWhatsApp from "@/public/storeLinks/storeFrontWhatsapp.png";
import ArrowRight from "@/public/storeLinks/arrowRight.svg";

const Index = () => {
  return (
    <div className="storeLinksIntro relative">
      <div className="mycontainer flex justify-center items-center text-center">
        <div>
          <div className="space-y-8 py-10 sm:py-24">
            <TextAnimation
              letters={[
                { letter: "Take", delay: "0" },
                { letter: "Orders", delay: "0.20" },
                { letter: "Via", delay: "0.40" },
                { letter: "Chat", delay: "0.60" },
              ]}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            />
            <TextAnimation
              letters={[
                { letter: "With", delay: "0.80" },
                { letter: "One", delay: "1" },
                { letter: "Link", delay: "1.20" },
              ]}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-my-blue font-semibold"
            />
            <div className="mt-10 flex gap-5 justify-center items-center flex-wrap">
              <Link href={"/pricing"}>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="bg-gray-900 text-white py-2.5 font-semibold mybutton px-10 capitalize"
                >
                  Start your journey
                </motion.button>
              </Link>
              <ScrollList to={"reports"} smooth spy>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="bg-gray-900 text-white py-2.5 font-semibold mybutton px-10 capitalize flex items-center gap-1"
                >
                  <p className="text-gray-200">See our Reports</p>
                  <motion.div initial={{ rotate: -90 }}>
                    <Image src={ArrowRight} alt="" />
                  </motion.div>
                </motion.button>
              </ScrollList>
            </div>
          </div>
          <Image src={StoreFrontWhatsApp} alt="" className="w-full pb-5" />
        </div>
      </div>
    </div>
  );
};

export default Index;
