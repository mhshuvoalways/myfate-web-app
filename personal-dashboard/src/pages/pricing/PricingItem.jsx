import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TickPhoto from "../../../public/tick.svg";
import ArrowDownBlue from "../../../public/arrowDownBlue.svg";

const PricingItem = ({ pricingObj }) => {
  const [itemExpand, setItemExpand] = useState(false);
  const { title, description, planTitle, planTime, inclueds } = pricingObj;

  return (
    <div className="space-y-5 border-2 border-[#384256] rounded-xl shadow p-5 min-w-[280px] max-w-[325px] overflow-hidden text-[#ddd]">
      <div>
        {title === "Basic" ? (
          <div className="flex items-center justify-between">
            <p className="text-3xl font-semibold">{title}</p>
            <div className="flex gap-2 bg-green-100 px-2 py-1 rounded-full">
              <img src={TickPhoto} alt="" className="" />
              <p className="text-green-700 font-semibold">Recommended</p>
            </div>
          </div>
        ) : (
          <p className="text-3xl font-semibold">{title}</p>
        )}
        <p className="text-xl">{description}</p>
      </div>
      <div>
        <p className="text-4xl font-semibold">{planTitle}</p>
        <p className="text-xl">{planTime}</p>
      </div>
      {planTitle === "Free" ? (
        <Link to={"/payment"}>
          <motion.p
            whileTap={{ scale: 0.9 }}
            className={`border-[#384256] border-2 py-2 rounded font-semibold text-center cursor-pointer mt-5 ${
              planTitle !== "Free" && "bg-my-blue"
            }`}
          >
            {planTitle === "Free" ? "Try for free" : "Start 14 day trial"}
          </motion.p>
        </Link>
      ) : (
        <motion.p
          whileTap={{ scale: 0.9 }}
          className={`border-[#384256] border-2 py-2 rounded font-semibold text-center cursor-pointer ${
            planTitle !== "Free" && "bg-my-blue"
          }`}
        >
          {planTitle === "Free" ? "Try for free" : "Start 14 day trial"}
        </motion.p>
      )}

      <div className="bg-[#384256] rounded-b-xl py-2 block md:hidden">
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
            <img src={ArrowDownBlue} alt="" />
          </motion.div>
        </div>
      </div>
      <div className={`block ${itemExpand ? "block" : "hidden md:block"}`}>
        <hr />
        <div className="mt-5">
          <p className="font-semibold text-xl">Includes:</p>
          <div className="space-y-2 mt-2">
            {inclueds.map((item) => (
              <div className="flex gap-2" key={item}>
                <img src={TickPhoto} alt="" />
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingItem;
