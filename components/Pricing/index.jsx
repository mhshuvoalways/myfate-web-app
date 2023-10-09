import { useState } from "react";
import Image from "next/image";
import { Fade } from "react-reveal";
import { motion } from "framer-motion";
import ArrowPhoto from "@/public/pricing/arrow.svg";
import TickPhoto from "@/public/pricing/tick.svg";

const Index = () => {
  const [selectPrice, setSelectPrice] = useState("monthly");

  const selectHandler = (value) => {
    setSelectPrice(value);
  };

  return (
    <div className="bg-gray-50 py-32">
      <div className="w-11/12 mx-auto">
        <p className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center">Our Affordable,</p>
        <p className="text-4xl md:text-5xl lg:text-6xl font-semibold text-my-blue text-center">
          Fair Pricing
        </p>
        <div className="bg-gray-100 flex w-60 mx-auto p-1 rounded-full mt-10 relative">
          <p
            className={
              selectPrice === "monthly"
                ? "bg-white text-xl rounded-full p-4 shadow-lg cursor-pointer font-semibold text-my-blue w-6/12 text-center"
                : "text-xl rounded-full p-4 w-6/12 text-center cursor-pointer"
            }
            onClick={() => selectHandler("monthly")}
          >
            Monthly
          </p>
          <p
            className={
              selectPrice === "quarterly"
                ? "bg-white text-xl rounded-full p-4 shadow-lg cursor-pointer font-semibold text-my-blue w-6/12 text-center"
                : "text-xl rounded-full p-4 w-6/12 text-center cursor-pointer"
            }
            onClick={() => selectHandler("quarterly")}
          >
            Quarterly
          </p>
          <div className="absolute -right-0 top-16 md:-right-28 md:top-4 flex gap-2 items-center">
            <Image src={ArrowPhoto} alt="" />
            <p className="text-lg font-semibold">5% off</p>
          </div>
        </div>
        <Fade bottom>
          <div className="flex gap-5 flex-wrap md:flex-nowrap mt-10">
            <div className="space-y-5 bg-white rounded-xl shadow p-5 w-full md:w-4/12">
              <div>
                <p className="text-3xl font-semibold">Starter</p>
                <p className="text-xl text-gray-500">
                  For businesses just starting out with few products
                </p>
              </div>
              <div>
                <p className="text-4xl font-semibold">Free</p>
                <p className="text-xl text-gray-500">Forever</p>
              </div>
              <motion.p
                whileTap={{ scale: 0.9 }}
                className="border border-gray-400 py-2 rounded-full font-semibold text-center cursor-pointer"
              >
                Try for free
              </motion.p>
              <hr />
              <div>
                <p className="font-semibold text-gray-600 text-xl">Includes:</p>
                <div className="space-y-1 mt-2">
                  <div className="flex gap-2">
                    <Image src={TickPhoto} alt="" />
                    <p>One Store</p>
                  </div>
                  <div className="flex gap-2">
                    <Image src={TickPhoto} alt="" />
                    <p>Store Link</p>
                  </div>
                  <div className="flex gap-2">
                    <Image src={TickPhoto} alt="" />
                    <p>Upload up to 10 Products</p>
                  </div>
                  <div className="flex gap-2">
                    <Image src={TickPhoto} alt="" />
                    <p>Manage Orders & Customers</p>
                  </div>
                  <div className="flex gap-2">
                    <Image src={TickPhoto} alt="" />
                    <p>Manage Discounts</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-5 bg-white rounded-xl shadow p-5 w-full md:w-4/12">
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-3xl font-semibold">Basic</p>
                  <div className="flex gap-2 bg-green-100 px-2 py-1 rounded-full">
                    <Image src={TickPhoto} alt="" className="" />
                    <p className="text-green-700 font-semibold">Recommended</p>
                  </div>
                </div>
                <p className="text-xl text-gray-500">
                  For growing businesses looking to handle their sales better
                </p>
              </div>
              <div>
                <p className="text-4xl font-semibold">
                  NGN
                  {selectPrice === "monthly" ? " 2,350" : " 6,695"}
                </p>
                <p className="text-xl text-gray-500">
                  {" "}
                  {selectPrice === "monthly" ? "Monthly" : "Quaterly"}
                </p>
              </div>
              <motion.p
                whileTap={{ scale: 0.9 }}
                className="bg-my-blue py-2 rounded-full font-semibold text-center cursor-pointer text-white"
              >
                Start 14 day trial
              </motion.p>
              <hr />
              <div>
                <p className="font-semibold text-gray-600 text-xl">Includes:</p>
                <div className="space-y-1 mt-2">
                  <div className="flex gap-2">
                    <Image src={TickPhoto} alt="" />
                    <p>Everything in Starter</p>
                  </div>
                  <div className="flex gap-2">
                    <Image src={TickPhoto} alt="" />
                    <p>Customizable Store Link</p>
                  </div>
                  <div className="flex gap-2">
                    <Image src={TickPhoto} alt="" />
                    <p>Upload up to 10 Products</p>
                  </div>
                  <div className="flex gap-2">
                    <Image src={TickPhoto} alt="" />
                    <p>Manage Product Options</p>
                  </div>
                  <div className="flex gap-2">
                    <Image src={TickPhoto} alt="" />
                    <p>Manage Discounts & Coupons</p>
                  </div>
                  <div className="flex gap-2">
                    <Image src={TickPhoto} alt="" />
                    <p>Search Engine Optimization</p>
                  </div>
                  <div className="flex gap-2">
                    <Image src={TickPhoto} alt="" />
                    <p>Generate receipts from Orders</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-5 bg-white rounded-xl shadow p-5 w-full md:w-4/12">
              <div>
                <p className="text-3xl font-semibold">Business+</p>
                <p className="text-xl text-gray-500">
                  For bigger businesses looking to sell more efficiently
                </p>
              </div>
              <div>
                <p className="text-4xl font-semibold">
                  NGN {selectPrice === "monthly" ? " 6,750" : "19,235"}
                </p>
                <p className="text-xl text-gray-500">
                  {selectPrice === "monthly" ? "Monthly" : "Quaterly"}
                </p>
              </div>
              <motion.p
                whileTap={{ scale: 0.9 }}
                className="bg-my-blue py-2 rounded-full font-semibold text-center cursor-pointer text-white"
              >
                Start 14 day trial
              </motion.p>
              <hr />
              <div>
                <p className="font-semibold text-gray-600 text-xl">Includes:</p>
                <div className="space-y-1 mt-2">
                  <div className="flex gap-2">
                    <Image src={TickPhoto} alt="" />
                    <p>Everything in Basic</p>
                  </div>
                  <div className="flex gap-2">
                    <Image src={TickPhoto} alt="" />
                    <p>Upload Unlimited Products</p>
                  </div>
                  <div className="flex gap-2">
                    <Image src={TickPhoto} alt="" />
                    <p>Unlimited Stores in one Account</p>
                  </div>
                  <div className="flex gap-2">
                    <Image src={TickPhoto} alt="" />
                    <p>Add Multiple Store Managers</p>
                  </div>
                  <div className="flex gap-2">
                    <Image src={TickPhoto} alt="" />
                    <p>Facebook Pixel Tracking [Coming soon]</p>
                  </div>
                  <div className="flex gap-2">
                    <Image src={TickPhoto} alt="" />
                    <p>Sell in Multiple Currencies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Index;
