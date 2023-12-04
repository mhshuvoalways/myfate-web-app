import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { CiDollar, CiHeart } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineClearAll } from "react-icons/md";
import { Link } from "react-scroll";

const Index = () => {
  const [showItem, setShowItem] = useState([]);

  const itemHandler = (value) => {
    const temp = [...showItem];
    if (showItem.includes(value)) {
      const newShowItems = temp.filter((el) => el !== value);
      setShowItem(newShowItems);
    } else {
      temp.push(value);
      setShowItem(temp);
    }
  };

  return (
    <div className="bg-white shadow rounded-xl w-full md:w-3/12 mt-16 sticky top-10">
      <div>
        <div
          className="flex justify-between items-center cursor-pointer shadow-sm p-5"
          onClick={() => itemHandler("dReport")}
        >
          <MdOutlineClearAll
            className={`text-2xl ${
              showItem.includes("dReport") && "text-blue-500"
            }`}
          />
          <p
            className={
              showItem.includes("dReport") && `text-blue-500 font-semibold`
            }
          >
            All
          </p>
          <IoIosArrowDown
            className={`text-xl transition-all ${
              showItem.includes("dReport")
                ? "rotate-180 text-blue-500"
                : "text-gray-400"
            }`}
          />
        </div>
        <AnimatePresence>
          {showItem.includes("dReport") && (
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
            className={`text-2xl ${
              showItem.includes("finance") && "text-blue-500"
            }`}
          />
          <p
            className={
              showItem.includes("finance") && `text-blue-500 font-semibold`
            }
          >
            Finance
          </p>
          <IoIosArrowDown
            className={`text-xl transition-all ${
              showItem.includes("finance")
                ? "rotate-180 text-blue-500"
                : "text-gray-400"
            }`}
          />
        </div>
        <AnimatePresence>
          {showItem.includes("finance") && (
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
            className={`text-2xl ${
              showItem.includes("love") && "text-blue-500"
            }`}
          />
          <p
            className={
              showItem.includes("love") && `text-blue-500 font-semibold`
            }
          >
            Love
          </p>
          <IoIosArrowDown
            className={`text-xl transition-all ${
              showItem.includes("love")
                ? "rotate-180 text-blue-500"
                : "text-gray-400"
            }`}
          />
        </div>
        <AnimatePresence>
          {showItem.includes("love") && (
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
