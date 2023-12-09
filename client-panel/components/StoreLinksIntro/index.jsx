import Play from "@/public/storeLinks/play.svg";
import StoreFrontWhatsApp from "@/public/storeLinks/storeFrontWhatsapp.webp";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Fade } from "react-reveal";
import Modal from "../Modal";
import TextAnimation from "../Utils/TextAnimation";
import Button from "../common/Button";

const Index = () => {
  const [modal, setModal] = useState(false);

  const modalHandler = () => {
    setModal(!modal);
  };

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
            <div className="flex items-center justify-center gap-5 flex-wrap">
              <Fade bottom>
                <Button value={"Start using links"} />
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="bg-white rounded px-5 py-3 font-gabarito text-lg font-semibold flex items-center gap-2"
                  onClick={modalHandler}
                >
                  <p className="text-black">See how it works</p>
                  <Image src={Play} alt="" />
                </motion.button>
              </Fade>
            </div>
          </div>
          <Image src={StoreFrontWhatsApp} alt="" className="w-full" />
        </div>
      </div>
      {modal && (
        <Modal modalHandler={modalHandler}>
          <iframe
            src="https://www.youtube.com/embed/lBHhOtG3wL8?si=8XjpkerIR23-GekO"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full"
            style={{
              height: "83vh",
            }}
          ></iframe>
        </Modal>
      )}
    </div>
  );
};

export default Index;
