import Image from "next/image";
import { motion } from "framer-motion";
import TickPhoto from "@/public/pricing/tick.svg";

const PricingItem = ({ pricingObj }) => {
  const { title, description, planTitle, planTime, inclueds } = pricingObj;

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
        <p className="text-4xl font-semibold">{planTitle}</p>
        <p className="text-xl text-gray-500">{planTime}</p>
      </div>
      <motion.p
        whileTap={{ scale: 0.9 }}
        className={`border border-gray-400 py-2 rounded font-semibold text-center cursor-pointer ${
          planTitle !== "Free" && "bg-my-blue text-white"
        }`}
      >
        {planTitle === "Free" ? "Try for free" : "Start 14 day trial"}
      </motion.p>
      <hr />
      <div>
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
  );
};

export default PricingItem;
