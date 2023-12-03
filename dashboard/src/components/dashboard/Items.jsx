import { CiUser } from "react-icons/ci";

const Items = ({ mycolor }) => {
  return (
    <div
      className={`flex items-center p-5 rounded-xl gap-5 w-full md:w-4/12 lg:w-3/12 justify-center bg-${mycolor}-200`}
    >
      <div>
        <p className="text-xl">Total Users</p>
        <p className={`font-semibold text-4xl text-${mycolor}-800`}>10</p>
      </div>
      <CiUser className={`text-5xl text-${mycolor}-800`} />
    </div>
  );
};

export default Items;
