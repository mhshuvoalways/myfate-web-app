import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Modal from "../Utils/Modal";
import AddEdit from "./AddEdit";
import CartIcon from "@/public/payment/cart.svg";
import ItemIcon from "@/public/payment/cart.png";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const modalHandler = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="mycontainer my-20 flex justify-center gap-10">
      <div className="w-5/12">
        <p className="font-semibold border-b border-gray-900 pb-3">
          CONTACT INFORMATION
        </p>
        <div className="mt-5">
          <div>
            <small>Email</small>
            <input
              type="text"
              className="border w-full p-2 bg-gray-50 rounded outline-0"
            />
          </div>
          <button className="bg-black p-2 w-full text-gray-200 font-bold tracking-widest mt-8">
            CONFIRM DETAILS
          </button>
        </div>
      </div>
      <div className="w-5/12">
        <div className="flex items-center justify-between border-b border-gray-900 pb-3">
          <div className="flex items-center gap-2">
            <p className="font-semibold">CART</p>
            <p className="font-light">(TOTAL ITEMS: 1)</p>
          </div>
          <Image src={CartIcon} alt="" />
        </div>
        <div className="mt-6 flex items-center gap-3">
          <Image src={ItemIcon} alt="" />
          <div>
            <p>Guide to Your Astrology Birth Chart</p>
            <p>$33.00</p>
          </div>
        </div>
        <div className="mt-8">
          <p>Chart Details</p>
          <div className="font-light mt-4">
            <p>Test</p>
            <p>October 1, 1995</p>
            <p>Dhaka, Dhaka, Bangladesh</p>
            <p>Is Sidereal: False</p>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-8">
          <motion.p
            className="border-b-2 border-black border-dotted text-sm cursor-pointer"
            whileTap={{ scale: 0.9 }}
            onClick={modalHandler}
          >
            Edit
          </motion.p>
          <motion.p
            className="border-b-2 border-black border-dotted text-sm cursor-pointer"
            whileTap={{ scale: 0.9 }}
          >
            Remove
          </motion.p>
        </div>
        <p className="border border-gray-300 mt-10 mb-5" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <p className="text-xl">Total</p>
            <p className="text-xl font-light">(USD)</p>
          </div>
          <p className="text-xl">$33.00</p>
        </div>
      </div>
      {modalOpen && (
        <Modal modalHandler={modalHandler}>
          <AddEdit />
        </Modal>
      )}
    </div>
  );
};

export default Index;
