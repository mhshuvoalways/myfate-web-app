import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Zoom } from "react-reveal";
import Modal from "../Modal";
import ArrowRight from "@/public/storeLinks/arrowRight.svg";
import Play from "@/public/storeLinks/play.svg";
import StoreFrontWhatsApp from "@/public/storeLinks/storeFrontWhatsapp.webp";

const Index = () => {
  const [modal, setModal] = useState(false);

  const modalHandler = () => {
    setModal(!modal);
  };

  return (
    <div className="storeLinksIntro relative">
      <div className="w-10/12 mx-auto flex justify-center items-center text-center container">
        <div>
          <div className="space-y-8 py-[85px]">
            <div>
              <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                Take Orders Via Chat
              </p>
              <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-my-blue font-semibold">
                With One Link
              </p>
            </div>
            <p className="text-xl md:text-3xl text-my-text-gray w-full md:w-10/12 lg:w-7/12 mx-auto text-center">
              Store links helps you beautifully showcase all your products and
              get orders on whatsapp.
            </p>
            <div className="flex items-center justify-center gap-5 flex-wrap">
              <Zoom right>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="bg-my-blue rounded px-5 py-3 font-gabarito text-lg font-semibold flex items-center gap-2"
                >
                  <p className="text-white">Start using links</p>
                  <Image src={ArrowRight} alt="" />
                </motion.button>
              </Zoom>
              <Zoom right>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="bg-white rounded px-5 py-3 font-gabarito text-lg font-semibold flex items-center gap-2"
                  onClick={modalHandler}
                >
                  <p className="text-black">See how it works</p>
                  <Image src={Play} alt="" />
                </motion.button>
              </Zoom>
            </div>
          </div>
          <Image src={StoreFrontWhatsApp} alt="" className="w-full"/>
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
