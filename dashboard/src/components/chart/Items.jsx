import { PiUsersLight } from "react-icons/pi";
import { RiUserHeartLine } from "react-icons/ri";
import { MdOutlineScoreboard } from "react-icons/md";
import { BsAward } from "react-icons/bs";

const Items = ({ mycolor, title, number }) => {
  return (
    <>
      {mycolor && (
        <div
          className={`flex items-center p-5 rounded-xl gap-5 w-full md:w-4/12 justify-center bg-${mycolor}-200`}
        >
          <div>
            <p className="text-xl">{title}</p>
            <p className={`font-semibold text-4xl text-${mycolor}-800`}>
              {number}
            </p>
          </div>
          {title === "Total User" && (
            <PiUsersLight className={`text-5xl ${`text-${mycolor}-800`}`} />
          )}
          {title === "Premium User" && (
            <RiUserHeartLine className={`text-5xl ${`text-${mycolor}-800`}`} />
          )}
          {title === "Score Eval" && (
            <MdOutlineScoreboard
              className={`text-5xl ${`text-${mycolor}-800`}`}
            />
          )}
          {title === "Total score" && (
            <BsAward className={`text-5xl ${`text-${mycolor}-800`}`} />
          )}
          {title === "Avarage score" && (
            <BsAward className={`text-5xl ${`text-${mycolor}-800`}`} />
          )}
        </div>
      )}
    </>
  );
};

export default Items;
