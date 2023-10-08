import Image from "next/image";
import { Fade } from "react-reveal";
import User from "@/public/promise/user.svg";
import Message from "@/public/promise/message.svg";
import Support from "@/public/promise/support.svg";

const index = () => {
  return (
    <div className="w-11/12 mx-auto mt-32">
      <div>
        <p className="text-6xl font-semibold">{`Here's what we`}</p>
        <p className="text-6xl font-semibold text-my-blue">promise you!</p>
      </div>
      <div className="mt-10 flex gap-6 justify-center md:justify-between flex-wrap md:flex-nowrap">
        <div className="bg-my-cream rounded-xl p-10 w-full md:w-4/12 space-y-5">
          <div className="bg-white w-20 h-20 rounded-full flex justify-center items-center">
            <Image src={User} alt="" className="" />
          </div>
          <Fade bottom>
            <p className="text-2xl mt-5 font-medium">
              {`We will be your business partner, you can always count on us`}
            </p>
          </Fade>
        </div>
        <div className="bg-my-cream rounded-xl p-10 w-full md:w-4/12 space-y-5">
          <div className="bg-white w-20 h-20 rounded-full flex justify-center items-center">
            <Image src={Message} alt="" className="" />
          </div>
          <Fade bottom>
            <p className="text-2xl mt-5 font-medium">
              {`Our platform will always be easy to use, for you and your customers`}
            </p>
          </Fade>
        </div>
        <div className="bg-my-cream rounded-xl p-10 w-full md:w-4/12 space-y-5">
          <div className="bg-white w-20 h-20 rounded-full flex justify-center items-center">
            <Image src={Support} alt="" className="" />
          </div>
          <Fade bottom>
            <p className="text-2xl mt-5 font-medium">
              {`You will always get support from us, whenever and wherever you need it`}
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default index;
