import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import TickPhoto from "@/public/pricing/tick.svg";
import ArrowDownBlue from "@/public/pricing/arrowDownBlue.svg";

const PricingItem = ({ pricingObj }) => {
  const [itemExpand, setItemExpand] = useState(false);
  const { title, description, planTitle, planTime, inclueds } = pricingObj;
  const router = useRouter();

  const clickHandler = (plan, price) => {
    router.push(`/payment?plan=${plan}&price=${price}`);
  };

  return (
    <div className="space-y-5 bg-white rounded-xl shadow p-5 min-w-[280px] max-w-[340px] overflow-hidden">
      <div>
        {title === "Basic" ? (
          <div className="flex items-center justify-between">
            <p className="text-3xl font-semibold">{title}</p>
            <div className="flex gap-2 bg-green-100 px-2 py-1 rounded-full">
              <Image src={TickPhoto} alt="" className="" />
              <p className="text-green-700 font-semibold">Recommended</p>
            </div>
          </div>
        ) : (
          <p className="text-3xl font-semibold">{title}</p>
        )}
        <p className="text-xl text-gray-500">{description}</p>
      </div>
      <div>
        <p className="text-2xl font-semibold">
          {planTitle === "Free" ? planTitle : `USD ${planTitle}`}
        </p>
        <p className="text-xl text-gray-500">{planTime}</p>
      </div>
      <motion.p
        onClick={() =>
          clickHandler(
            title.toLowerCase(),
            planTitle === "Free" ? 0 : planTitle
          )
        }
        whileTap={{ scale: 0.9 }}
        className={`border border-gray-400 py-2 rounded font-semibold text-center cursor-pointer ${
          planTitle !== "Free" && "bg-my-blue text-white"
        }`}
      >
        {planTitle === "Free" ? "Try for free" : "Start 14 day trial"}
      </motion.p>

      <div className="bg-gray-50 rounded-b-xl py-2 block md:hidden">
        <div
          className="flex items-center justify-center gap-2 cursor-pointer"
          onClick={() => setItemExpand(!itemExpand)}
        >
          <p className="text-my-blue text-lg font-semibold">
            {itemExpand ? "View Less" : "View Features"}
          </p>
          <motion.div
            animate={{ rotate: itemExpand ? 180 : 0 }}
            clclassName="mt-1"
          >
            <Image src={ArrowDownBlue} alt="" />
          </motion.div>
        </div>
      </div>
      <div className={`block ${itemExpand ? "block" : "hidden md:block"}`}>
        <hr />
        <div className="mt-5">
          <p className="font-semibold text-gray-600 text-xl">Includes:</p>
          <div className="space-y-2 mt-2">
            {inclueds.map((item) => (
              <div className="flex gap-2" key={item}>
                <Image src={TickPhoto} alt="" />
                <p className="text-gray-600 text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingItem;
