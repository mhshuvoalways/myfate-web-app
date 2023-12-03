import { PiUsersLight } from "react-icons/pi";
import { RiUserHeartLine } from "react-icons/ri";
import { MdOutlineScoreboard } from "react-icons/md";
import { BsAward } from "react-icons/bs";

const Items = ({ bgcolor, textcolor, title, number }) => {
  return (
    <div
      className={`flex items-center p-5 rounded-xl gap-5 w-full justify-center ${bgcolor}`}
    >
      <div>
        <p className="text-xl">{title}</p>
        <p className={`font-semibold text-4xl ${textcolor}`}>{number}</p>
      </div>
      {title === "Total User" && (
        <PiUsersLight className={`text-5xl ${textcolor}`} />
      )}
      {title === "Premium User" && (
        <RiUserHeartLine className={`text-5xl ${textcolor}`} />
      )}
      {title === "Score Eval" && (
        <MdOutlineScoreboard className={`text-5xl ${textcolor}`} />
      )}
      {title === "Total score" && (
        <BsAward className={`text-5xl ${textcolor}`} />
      )}
      {title === "Avarage score" && (
        <BsAward className={`text-5xl ${textcolor}`} />
      )}
    </div>
  );
};

export default Items;
