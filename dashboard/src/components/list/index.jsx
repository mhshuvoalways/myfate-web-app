import { RxThickArrowRight } from "react-icons/rx";

const index = () => {
  return (
    <div className="bg-white shadow-sm rounded-xl p-2 w-full md:w-3/12 mt-16">
      <p className="text-3xl text-center">List</p>
      <ul className="mt-8 space-y-1">
        <li className="bg-blue-300 text-xl rounded-lg p-2 text-gray-100 flex gap-2 items-center cursor-pointer">
          <RxThickArrowRight />
          <p>Daily Report</p>
        </li>
        <li className="text-xl p-2 flex gap-2 items-center cursor-pointer">
          <RxThickArrowRight className="opacity-0" />
          <p>Finance</p>
        </li>
        <li className="text-xl p-2 flex gap-2 items-center cursor-pointer">
          <RxThickArrowRight className="opacity-0" />
          <p>Love</p>
        </li>
      </ul>
    </div>
  );
};

export default index;
