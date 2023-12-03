import Header from "../header";
import Chatjs from "../chart/Chart";
import Timer from "../timer";
import SubItem from "../subItem";
import Items from "../chart/Items";

const index = ({
  selectSubItemValue,
  setSelectSubItemValue,
  selectSubItems,
  data,
}) => {
  let sum = 0;
  data?.scores.forEach((el) => {
    sum = sum + el.score;
  });

  return (
    <div>
      <Header />
      <div className="flex justify-between items-start flex-wrap lg:flex-nowrap gap-10 mycontainer">
        <div className="mt-16 w-full lg:w-7/12">
          <img src="/images/treesun.jpg" className="w-full rounded-3xl" />
          <div className="mt-10 space-y-10">
            <div className="flex sm:justify-between justify-center gap-5 mt-5 flex-wrap md:flex-nowrap">
              <Items
                textcolor={"text-purple-800"}
                bgcolor={"bg-purple-200"}
                title="Total score"
                number={data?.scores.length}
              />
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
            <SubItem
              selectSubItemValue={selectSubItemValue}
              setSelectSubItemValue={setSelectSubItemValue}
              selectSubItems={selectSubItems}
            />
            <Chatjs data={data} />
          </div>
          <p className="font-semibold text-xl mt-5">
            Your dialogues today are building bridges that will span the test of
            time.
          </p>
        </div>
        <div className="w-full lg:w-5/12 mt-0 lg:mt-16">
          <Timer />
          <div className="mt-10">
            <p className="text-5xl">Prayers</p>
            <div className="bg-blue-100 rounded-xl p-5 mt-5">
              <button className="border border-gray-400 px-5 py-2 rounded-xl font-semibold">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
