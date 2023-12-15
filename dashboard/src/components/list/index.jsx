import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineClearAll } from "react-icons/md";
import { Link } from "react-scroll";

const Index = ({ reports, setState }) => {
  const [showItem, setShowItem] = useState(["full"]);

  const itemHandler = (value) => {
    let temp = [...showItem];
    if (showItem.includes(value)) {
      const newShowItems = temp.filter((el) => el !== value);
      setShowItem(newShowItems);
    } else {
      temp.push(value);
      setShowItem(temp);
      setTimeout(() => {
        const newShowItems = temp.filter((el) => el === value);
        setShowItem(newShowItems);
      }, 300);
    }
  };

  return (
    <div
      className="bg-white w-full md:flex mt-10 justify-between border shadow-sm rounded-xl relative flex-wrap"
    >
      {reports &&
        Object.keys(reports.reports).map((el) => {
          return (
            <div key={el}>
              <div
                className="flex gap-2 md:gap-5 justify-between items-center cursor-pointer shadow-sm p-5"
                onClick={() => itemHandler(el)}
              >
                <MdOutlineClearAll
                  className={`text-2xl ${
                    showItem.includes(el) && "text-blue-500"
                  }`}
                />
                <p
                  className={
                    showItem.includes(el) && `text-blue-500 font-semibold`
                  }
                >
                  {el}
                </p>
                <IoIosArrowDown
                  className={`text-xl transition-all ${
                    showItem.includes(el)
                      ? "rotate-180 text-blue-500"
                      : "text-gray-400"
                  }`}
                />
              </div>
              <AnimatePresence>
                {showItem.includes(el) && (
                  <motion.div
                    className="my-3 p-2 static md:absolute top-14 bg-white w-full md:w-[20%] shadow rounded-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {Object.entries(reports.reports[el]).map((val) => {
                      return (
                        <Link
                          activeClass="bg-blue-50 font-semibold"
                          smooth={true}
                          spy={true}
                          to={val[0]}
                          key={val[0]}
                          onClick={() => {
                            setState(reports.reports[el]);
                          }}
                        >
                          <p className="border rounded-full p-1 mt-2 text-center cursor-pointer hover:bg-blue-50">
                            {val[0]}
                          </p>
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
    </div>
  );
};

export default Index;
