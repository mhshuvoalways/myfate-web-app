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
  reportWriting,
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
      <div className="mycontainer">
        <img src="/images/treesun.jpg" className="w-full rounded-3xl mt-10" />
        <p className="text-3xl mt-10 title-font capitalize">
          {reportWriting?.length && reportWriting[0] + ". " + reportWriting[1]}
        </p>
        <div className="flex justify-between items-start flex-wrap lg:flex-nowrap gap-10 mt-10">
          <div className="w-full lg:w-6/12 space-y-10">
            <div className="flex sm:justify-between justify-center gap-5 flex-wrap md:flex-nowrap">
              <Items
                textcolor={"text-red-800"}
                bgcolor={"bg-[#F1E7FF]"}
                title="Avarage score"
                number={sum !== 0 && (sum / data?.scores.length).toFixed(2)}
              />
              <Items
                textcolor={"text-green-800"}
                bgcolor={"bg-[#E5F5FF]"}
                title="Score Eval"
                number={data?.scoreEval}
              />
            </div>
            <div className="bg-white shadow rounded-xl p-5 space-y-5">
              <p className="text-3xl mb-5 text-[teal] title-font">Today</p>
              <hr />
              <SubItem
                selectSubItemValue={selectSubItemValue}
                setSelectSubItemValue={setSelectSubItemValue}
                selectSubItems={selectSubItems}
                bgColor={"bg-[teal]"}
              />
              <Chatjs data={data} chartColor={"teal"} />
              <p className="text-[teal] text-center mt-10">
                {data?.dailyContent}
              </p>
            </div>
            <Timer />
          </div>
          <div className="w-full lg:w-6/12 space-y-10">
            <div className="flex sm:justify-between justify-center gap-5 flex-wrap md:flex-nowrap">
              <Items
                textcolor={"text-red-800"}
                bgcolor={"bg-[#F1E7FF]"}
                title="Avarage score"
                number={
                  sumNext !== 0 &&
                  (sumNext / dataNext?.scores.length).toFixed(2)
                }
              />
              <Items
                textcolor={"text-green-800"}
                bgcolor={"bg-[#E5F5FF]"}
                title="Score Eval"
                number={dataNext?.scoreEval}
              />
            </div>
            <div className="bg-white shadow rounded-xl p-5 space-y-5">
              <p className="text-3xl mb-5 text-[purple] title-font">Tomorrow</p>
              <hr />
              <SubItem
                selectSubItemValue={selectSubItemValueNext}
                setSelectSubItemValue={setSelectSubItemValueNext}
                selectSubItems={selectSubItems}
                bgColor={"bg-[purple]"}
              />
              <Chatjs data={dataNext} chartColor={"purple"} />
              <p className="text-[purple] text-center mt-10">
                {dataNext?.dailyContent}
              </p>
            </div>
            <div>
              <p className="text-4xl title-font">Prayers</p>
              <div className="bg-blue-100 rounded-xl p-5 mt-5 flex justify-between items-center gap-5">
                <input
                  type="text"
                  className="border border-gray-400 px-2 py-2 rounded-xl font-semibold w-full outline-0"
                  placeholder="Something"
                />
                <motion.p
                  whileTap={{
                    scale: 0.9,
                  }}
                  className="border border-gray-400 px-5 py-2 rounded-xl font-semibold w-full sm:w-24 text-center ml-auto cursor-pointer"
                >
                  Submit
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
