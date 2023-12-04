import { useState } from "react";
import { Link } from "react-scroll";
import { CiDollar, CiHeart } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { MdOutlineClearAll } from "react-icons/md";

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
          className="flex justify-between items-center cursor-pointer shadow-sm p-5"
          onClick={() => itemHandler("dReport")}
        >
          <MdOutlineClearAll
            className={`text-2xl ${showItem === "dReport" && "text-blue-500"}`}
          />
          <p
            className={showItem === "dReport" && `text-blue-500 font-semibold`}
          >
            All
          </p>
          <IoIosArrowDown
            className={`text-xl transition-all ${
              showItem === "dReport"
                ? "rotate-180 text-blue-500"
                : "text-gray-400"
            }`}
          />
        </div>
        <AnimatePresence>
          {showItem === "dReport" && (
            <motion.div
              className="my-3 px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                activeClass="bg-blue-50 font-semibold"
                smooth={true}
                spy={true}
                to={"project"}
              >
                <p className="border rounded-full p-1 mt-2 text-center cursor-pointer hover:bg-blue-50">
                  Project
                </p>
              </Link>
              <Link
                activeClass="bg-blue-50 font-semibold"
                smooth={true}
                spy={true}
                to={"asset"}
              >
                <p className="border rounded-full p-1 mt-2 text-center cursor-pointer hover:bg-blue-50">
                  Asset
                </p>
              </Link>
              <Link
                activeClass="bg-blue-50 font-semibold"
                smooth={true}
                spy={true}
                to={"image"}
              >
                <p className="border rounded-full p-1 mt-2 text-center cursor-pointer hover:bg-blue-50">
                  Image
                </p>
              </Link>
              <Link
                activeClass="bg-blue-50 font-semibold"
                smooth={true}
                spy={true}
                to={"person"}
              >
                <p className="border rounded-full p-1 mt-2 text-center cursor-pointer hover:bg-blue-50">
                  Person
                </p>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div>
        <div
          className="flex justify-between items-center cursor-pointer shadow-sm p-5"
          onClick={() => itemHandler("finance")}
        >
          <CiDollar
            className={`text-2xl ${showItem === "finance" && "text-blue-500"}`}
          />
          <p
            className={showItem === "finance" && `text-blue-500 font-semibold`}
          >
            Finance
          </p>
          <IoIosArrowDown
            className={`text-xl transition-all ${
              showItem === "finance"
                ? "rotate-180 text-blue-500"
                : "text-gray-400"
            }`}
          />
        </div>
        <AnimatePresence>
          {showItem === "finance" && (
            <motion.div
              className="my-3 px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                activeClass="bg-blue-50 font-semibold"
                smooth={true}
                spy={true}
                to={"project"}
              >
                <p className="border rounded-full p-1 mt-2 text-center cursor-pointer hover:bg-blue-50">
                  Project
                </p>
              </Link>
              <Link
                activeClass="bg-blue-50 font-semibold"
                smooth={true}
                spy={true}
                to={"asset"}
              >
                <p className="border rounded-full p-1 mt-2 text-center cursor-pointer hover:bg-blue-50">
                  Asset
                </p>
              </Link>
              <Link
                activeClass="bg-blue-50 font-semibold"
                smooth={true}
                spy={true}
                to={"image"}
              >
                <p className="border rounded-full p-1 mt-2 text-center cursor-pointer hover:bg-blue-50">
                  Image
                </p>
              </Link>
              <Link
                activeClass="bg-blue-50 font-semibold"
                smooth={true}
                spy={true}
                to={"person"}
              >
                <p className="border rounded-full p-1 mt-2 text-center cursor-pointer hover:bg-blue-50">
                  Person
                </p>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div>
        <div
          className="flex justify-between items-center cursor-pointer shadow-sm p-5"
          onClick={() => itemHandler("love")}
        >
          <CiHeart
            className={`text-2xl ${showItem === "love" && "text-blue-500"}`}
          />
          <p className={showItem === "love" && `text-blue-500 font-semibold`}>
            Love
          </p>
          <IoIosArrowDown
            className={`text-xl transition-all ${
              showItem === "love" ? "rotate-180 text-blue-500" : "text-gray-400"
            }`}
          />
        </div>
        <AnimatePresence>
          {showItem === "love" && (
            <motion.div
              className="my-3 px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                activeClass="bg-blue-50 font-semibold"
                smooth={true}
                spy={true}
                to={"project"}
              >
                <p className="border rounded-full p-1 mt-2 text-center cursor-pointer hover:bg-blue-50">
                  Project
                </p>
              </Link>
              <Link
                activeClass="bg-blue-50 font-semibold"
                smooth={true}
                spy={true}
                to={"asset"}
              >
                <p className="border rounded-full p-1 mt-2 text-center cursor-pointer hover:bg-blue-50">
                  Asset
                </p>
              </Link>
              <Link
                activeClass="bg-blue-50 font-semibold"
                smooth={true}
                spy={true}
                to={"image"}
              >
                <p className="border rounded-full p-1 mt-2 text-center cursor-pointer hover:bg-blue-50">
                  Image
                </p>
              </Link>
              <Link
                activeClass="bg-blue-50 font-semibold"
                smooth={true}
                spy={true}
                to={"person"}
              >
                <p className="border rounded-full p-1 mt-2 text-center cursor-pointer hover:bg-blue-50">
                  Person
                </p>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;
