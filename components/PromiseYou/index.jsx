import Image from "next/image";
import { Fade } from "react-reveal";
import AnimationText from "../TextAnimation";
import User from "@/public/promise/user.svg";
import Message from "@/public/promise/message.svg";
import Support from "@/public/promise/support.svg";

const index = () => {
  return (
    <div className="mt-32 mycontainer">
      <div>
        <AnimationText
          letters={[
            {
              letter: `Here's`,
              delay: "0",
            },
            {
              letter: `what`,
              delay: "0.20",
            },
            {
              letter: `we`,
              delay: "0.40",
            },
          ]}
          className={"text-4xl md:text-5xl lg:text-6xl font-semibold"}
        />
        <AnimationText
          letters={[
            {
              letter: "promise",
              delay: "0.60",
            },
            {
              letter: "you!",
              delay: "0.80",
            },
          ]}
          className={
            "text-4xl md:text-5xl lg:text-6xl font-semibold text-my-blue mt-0 md:mt-4"
          }
        />
      </div>
      <div className="mt-20 flex gap-6 justify-center md:justify-between flex-wrap md:flex-nowrap">
        <div className="bg-my-cream rounded-xl p-10 w-full md:w-4/12 space-y-5">
          <div className="bg-white w-20 h-20 rounded-full flex justify-center items-center">
            <Image src={User} alt="" className="" />
          </div>
          <Fade bottom>
            <p className="text-xl md:text-2xl mt-5 font-medium">
              {`We will be your business partner, you can always count on us`}
            </p>
          </Fade>
        </div>
        <div className="bg-my-cream rounded-xl p-10 w-full md:w-4/12 space-y-5">
          <div className="bg-white w-20 h-20 rounded-full flex justify-center items-center">
            <Image src={Message} alt="" className="" />
          </div>
          <Fade bottom>
            <p className="text-xl md:text-2xl mt-5 font-medium">
              {`Our platform will always be easy to use, for you and your customers`}
            </p>
          </Fade>
        </div>
        <div className="bg-my-cream rounded-xl p-10 w-full md:w-4/12 space-y-5">
          <div className="bg-white w-20 h-20 rounded-full flex justify-center items-center">
            <Image src={Support} alt="" className="" />
          </div>
          <Fade bottom>
            <p className="text-xl md:text-2xl mt-5 font-medium">
              {`You will always get support from us, whenever and wherever you need it`}
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default index;
