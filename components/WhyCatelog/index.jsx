import Image from "next/image";
import { Fade, Zoom } from "react-reveal";
import Money from "@/public/catelog/money.webp";
import Efficient from "@/public/catelog/efficient.webp";
import Visible from "@/public/catelog/visible.webp";
import Standout from "@/public/catelog/standout.webp";

const index = () => {
  return (
    <div className="w-11/12 mx-auto mt-32">
      <div>
        <p className="text-6xl font-semibold">Catlog supports you</p>
        <p className="text-6xl font-semibold text-my-blue">with the tools to</p>
      </div>
      <Zoom top>
        <div className="mt-10 flex gap-6 justify-center flex-wrap">
          <div className="bg-my-cream rounded-xl px-10 lg:py-20 py-10 w-full lg:w-[49%] space-y-5">
            <Image src={Money} alt="" className="w-36" />
            <Fade bottom>
              <p className="text-4xl font-semibold">Make More Money</p>
              <p className="text-2xl mt-5">
                {`With catlog, everyone sees all the items you sell, which would
            prevent you from loosing sales because buyers didn't know what you
            sell.`}
              </p>
            </Fade>
          </div>
          <div className="bg-my-cream rounded-xl px-10 lg:py-20 py-10 w-full lg:w-[49%] space-y-5">
            <Image src={Efficient} alt="" className="w-36" />
            <Fade bottom>
              <p className="text-4xl font-semibold">Be More Efficient</p>
              <p className="text-2xl mt-5">
                {`With Catlog you won't have to keep answering same questions from customers everytime especially if they won't end up buying.`}
              </p>
            </Fade>
          </div>
          <div className="bg-my-cream rounded-xl px-10 lg:py-20 py-10 w-full lg:w-[49%] space-y-5">
            <Image src={Visible} alt="" className="w-36" />
            <Fade bottom>
              <p className="text-4xl font-semibold">Be More Visible</p>
              <p className="text-2xl mt-5">
                {`With Catlog you won't have to keep answering same questions from customers everytime especially if they won't end up buying.`}
              </p>
            </Fade>
          </div>
          <div className="bg-my-cream rounded-xl px-10 lg:py-20 py-10 w-full lg:w-[49%] space-y-5">
            <Image src={Standout} alt="" className="w-36" />
            <Fade bottom>
              <p className="text-4xl font-semibold">Stand Out</p>
              <p className="text-2xl mt-5">
                {`With Catlog you won't have to keep answering same questions from customers everytime especially if they won't end up buying.`}
              </p>
            </Fade>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default index;
