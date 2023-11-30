import Chatjs from "../chart";
import Timer from "../timer";
import SubItem from "../subItem";

const index = () => {
  return (
    <div>
      <p className="text-5xl">
        Monitor health of <br /> your business
      </p>
      <p className="text-blue-400 mt-8 text-xl">
        Control and analyze your data
      </p>
      <div className="flex justify-between items-start flex-wrap lg:flex-nowrap gap-10">
        <div className="mt-16 w-full lg:w-7/12">
          <img src="/images/treesun.jpg" className="w-full rounded-3xl" />
          <div className="block lg:hidden">
            <SubItem top />
          </div>
          <p className="text-5xl mt-10">Total</p>
          <div className="mt-10">
            <Chatjs />
          </div>
          <p className="font-semibold text-xl mt-5">
            Your dialogues today are building bridges that will span the test of
            time.
          </p>
          <div className="mt-20">
            <p className="text-5xl">Prayers</p>
            <div className="bg-blue-100 rounded-xl p-5 mt-5">
              <button className="border border-gray-400 px-5 py-2 rounded-xl font-semibold">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-5/12 mt-0 lg:mt-16">
          <Timer />
          <div className="subitem">
            <SubItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
