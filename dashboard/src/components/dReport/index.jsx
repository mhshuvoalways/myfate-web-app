import { motion } from "framer-motion";
import Header from "../header";
import Chatjs from "../chart/Chart";
import Timer from "../timer";
import SubItem from "../subItem";
import Items from "../chart/Items";

const index = ({
  selectSubItemValue,
  setSelectSubItemValue,
  selectSubItemValueNext,
  setSelectSubItemValueNext,
  selectSubItems,
  data,
  dataNext,
}) => {
  let sum = 0;
  data?.scores.forEach((el) => {
    sum = sum + el.score;
  });

  let sumNext = 0;
  dataNext?.scores.forEach((el) => {
    sumNext = sumNext + el.score;
  });

  return (
    <div>
      <Header />
      <div className="flex justify-between items-start flex-wrap lg:flex-nowrap gap-10 mycontainer">
        <div className="mt-16 w-full lg:w-6/12 space-y-10">
          <img src="/images/treesun.jpg" className="w-full rounded-3xl" />
          <div className="flex sm:justify-between justify-center gap-5 mt-5 flex-wrap md:flex-nowrap">
            <Items
              textcolor={"text-red-800"}
              bgcolor={"bg-red-200"}
              title="Avarage score"
              number={(sum / data?.scores.length).toFixed(2)}
            />
            <Items
              textcolor={"text-green-800"}
              bgcolor={"bg-green-200"}
              title="Score Eval"
              number={data?.scoreEval}
            />
          </div>
          <div className="bg-white shadow rounded-xl p-5 space-y-5">
            <p className="text-3xl mb-5 text-[teal]">Today</p>
            <SubItem
              selectSubItemValue={selectSubItemValue}
              setSelectSubItemValue={setSelectSubItemValue}
              selectSubItems={selectSubItems}
              bgColor={"bg-[teal]"}
            />
            <Chatjs data={data} chartColor={"teal"} />
          </div>
          <Timer />
        </div>
        <div className="w-full lg:w-6/12 mt-0 lg:mt-16 space-y-10">
          <div className="flex sm:justify-between justify-center gap-5 flex-wrap md:flex-nowrap">
            <Items
              textcolor={"text-red-800"}
              bgcolor={"bg-red-200"}
              title="Avarage score"
              number={(sumNext / dataNext?.scores.length).toFixed(2)}
            />
            <Items
              textcolor={"text-green-800"}
              bgcolor={"bg-green-200"}
              title="Score Eval"
              number={dataNext?.scoreEval}
            />
          </div>
          <div className="bg-white shadow rounded-xl p-5 space-y-5">
            <p className="text-3xl mb-5 text-[purple]">Tomorrow</p>
            <SubItem
              selectSubItemValue={selectSubItemValueNext}
              setSelectSubItemValue={setSelectSubItemValueNext}
              selectSubItems={selectSubItems}
              bgColor={"bg-[purple]"}
            />
            <Chatjs data={dataNext} chartColor={"purple"} />
          </div>
          <div>
            <p className="text-4xl">Prayers</p>
            <div className="bg-blue-100 rounded-xl p-5 mt-5">
              <motion.button
                whileTap={{
                  scale: 0.9,
                }}
                className="border border-gray-400 px-5 py-2 rounded-xl font-semibold"
              >
                Submit
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
