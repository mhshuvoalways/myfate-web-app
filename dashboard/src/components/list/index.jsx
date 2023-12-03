import { useState } from "react";
import { CiCalendar, CiDollar, CiHeart } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

const Index = () => {
  const [showItem, setShowItem] = useState("dReport");

  const itemHandler = (value) => {
    if (showItem) {
      if (showItem === value) {
        setShowItem("");
      } else {
        setShowItem(value);
      }
    } else {
      setShowItem(value);
    }
  };

  return (
    <div className="bg-white shadow rounded-xl w-full md:w-3/12 mt-16">
      <div>
        <div
          className="flex justify-between items-center cursor-pointer shadow-sm px-2 py-3"
          onClick={() => itemHandler("dReport")}
        >
          <CiCalendar
            className={`text-2xl ${showItem === "dReport" && "text-blue-500"}`}
          />
          <IoIosArrowDown
            className={`text-xl text-gray-400 transition-all ${
              showItem === "dReport" && "rotate-180 text-blue-500"
            }`}
          />
        </div>
        <AnimatePresence>
          {showItem === "dReport" && (
            <motion.div
              className="my-3 space-y-2 px-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.1 }}
            >
              <p className="border rounded-full p-1 text-center cursor-pointer hover:bg-blue-50 bg-blue-50 font-semibold">
                Project
              </p>
              <p className="border rounded-full p-1 text-center cursor-pointer hover:bg-blue-50">
                Asset
              </p>
              <p className="border rounded-full p-1 text-center cursor-pointer hover:bg-blue-50">
                Image
              </p>
              <p className="border rounded-full p-1 text-center cursor-pointer hover:bg-blue-50">
                Person
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div>
        <div
          className="flex justify-between items-center cursor-pointer shadow-sm px-2 py-3"
          onClick={() => itemHandler("finance")}
        >
          <CiDollar
            className={`text-2xl ${showItem === "finance" && "text-blue-500"}`}
          />
          <IoIosArrowDown
            className={`text-xl text-gray-400 transition-all ${
              showItem === "finance" && "rotate-180 text-blue-500"
            }`}
          />
        </div>
        <AnimatePresence>
          {showItem === "finance" && (
            <motion.div
              className="my-3 space-y-2 px-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.1 }}
            >
              <p className="border rounded-full p-1 text-center cursor-pointer hover:bg-blue-50 bg-blue-50 font-semibold">
                Project
              </p>
              <p className="border rounded-full p-1 text-center cursor-pointer hover:bg-blue-50">
                Asset
              </p>
              <p className="border rounded-full p-1 text-center cursor-pointer hover:bg-blue-50">
                Image
              </p>
              <p className="border rounded-full p-1 text-center cursor-pointer hover:bg-blue-50">
                Person
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div>
        <div
          className="flex justify-between items-center cursor-pointer shadow-sm px-2 py-3"
          onClick={() => itemHandler("love")}
        >
          <CiHeart
            className={`text-2xl ${showItem === "love" && "text-blue-500"}`}
          />
          <IoIosArrowDown
            className={`text-xl text-gray-400 transition-all ${
              showItem === "love" && "rotate-180 text-blue-500"
            }`}
          />
        </div>
        <AnimatePresence>
          {showItem === "love" && (
            <motion.div
              className="my-3 space-y-2 px-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.1 }}
            >
              <p className="border rounded-full p-1 text-center cursor-pointer hover:bg-blue-50 bg-blue-50 font-semibold">
                Project
              </p>
              <p className="border rounded-full p-1 text-center cursor-pointer hover:bg-blue-50">
                Asset
              </p>
              <p className="border rounded-full p-1 text-center cursor-pointer hover:bg-blue-50">
                Image
              </p>
              <p className="border rounded-full p-1 text-center cursor-pointer hover:bg-blue-50">
                Person
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;
