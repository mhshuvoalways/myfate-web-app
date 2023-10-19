import Image from "next/image";
import FormImg from "@/public/buildgrowth/form.png";
import PaymentIcon from "@/public/buildgrowth/payment.svg";
import AtlasIcon from "@/public/buildgrowth/atlas.svg";
import IncomingIcon from "@/public/buildgrowth/incoming.svg";
import ArrowRight from "@/public/buildgrowth/arrowRight.svg";

const index = () => {
  return (
    <div className="bg-blue-50 buildgrowth">
      <div className="mycontainer border-l border-r px-5 py-32">
        <div className="space-y-6 w-full md:w-7/12">
          <p className="text-my-blue font-semibold text-xl">Built for growth</p>
          <p className="text-4xl font-bold">
            Take your startup farther, faster
          </p>
          <p className="text-xl">
            Startups build on Stripe to launch faster, adapt as they grow, and
            automate workflows to do more with less. Build your own API-based
            integration or use our low- to no-code solutions, which are simple
            enough for easy implementation and powerful enough to scale as fast
            and as far as you need.
          </p>
        </div>
        <div className="flex md:justify-between justify-center mt-0 md:mt-20 gap-5 flex-wrap">
          <div className="mt-10 md:mt-36 space-y-7 w-full md:w-[48%]">
            <div className="parent">
              <div className="relative pt-16 px-5 md:px-20 border-white border-4 rounded-t-xl buildforgrowth-img-bg">
                <Image src={FormImg} alt="" className="rounded-t-xl" />
                <p className="bg-gray-200 opacity-10 absolute inset-0"></p>
              </div>
              <div className="bg-white px-10 pt-10 space-y-3 shadow-xl rounded-b-xl buildforgrowth">
                <div className="bg-blue-50 flex items-center gap-2 w-32 text-center py-2 px-4 rounded">
                  <Image src={AtlasIcon} alt="" />
                  <p className="font-semibold">Atlas</p>
                </div>
                <p className="text-3xl font-semibold">
                  Incorporate your company
                </p>
                <p className="text-xl text-gray-600">
                  Form a legal entity, issue stock, and start accepting
                  payments.
                </p>
                <div className="last-element pt-8 cursor-pointer">
                  <p className="text-my-blue text-xl font-semibold pb-1">
                    Learn about atlas
                  </p>
                  <Image src={ArrowRight} alt="" />
                </div>
              </div>
            </div>
            <div className="parent">
              <div className="relative pt-16 px-5 md:px-20 border-white border-4 rounded-t-xl buildforgrowth-img-bg">
                <Image src={FormImg} alt="" className="rounded-t-xl" />
                <p className="bg-gray-200 opacity-10 absolute inset-0"></p>
              </div>
              <div className="bg-white px-10 pt-10 space-y-3 shadow-xl rounded-b-xl buildforgrowth">
                <div className="bg-blue-50 flex items-center gap-2 w-32 text-center py-2 px-4 rounded">
                  <Image src={PaymentIcon} alt="" />
                  <p className="font-semibold">Checkout</p>
                </div>
                <p className="text-3xl font-semibold">Sell to consumers</p>
                <p className="text-xl text-gray-600">
                  Launch a B2C business with a prebuilt payment page that’s
                  optimized for conversion.
                </p>
                <div className="last-element pt-8 cursor-pointer">
                  <p className="text-my-blue text-xl font-semibold pb-1">{`Start with checkout`}</p>
                  <Image src={ArrowRight} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-7 w-full md:w-[48%]">
            <div className="parent">
              <div className="relative pt-16 px-5 md:px-20 border-white border-4 rounded-t-xl buildforgrowth-img-bg">
                <Image src={FormImg} alt="" className="rounded-t-xl" />
                <p className="bg-gray-200 opacity-10 absolute inset-0"></p>
              </div>
              <div className="bg-white px-10 pt-10 space-y-3 shadow-xl rounded-b-xl buildforgrowth">
                <div className="bg-blue-50 flex items-center gap-2 w-32 text-center py-2 px-4 rounded">
                  <Image src={PaymentIcon} alt="" />
                  <p className="font-semibold">Checkout</p>
                </div>
                <p className="text-3xl font-semibold">Validate your idea</p>
                <p className="text-xl text-gray-600">
                  Test your product idea by launching payments with little to no
                  code.
                </p>
                <div className="last-element pt-8 cursor-pointer">
                  <p className="text-my-blue text-xl font-semibold pb-1">
                    Try Payment Links
                  </p>
                  <Image src={ArrowRight} alt="" />
                </div>
              </div>
            </div>
            <div className="parent">
              <div className="relative pt-16 px-5 md:px-20 border-white border-4 rounded-t-xl buildforgrowth-img-bg">
                <Image src={FormImg} alt="" className="rounded-t-xl" />
                <p className="bg-gray-200 opacity-10 absolute inset-0"></p>
              </div>
              <div className="bg-white px-10 pt-10 space-y-3 shadow-xl rounded-b-xl buildforgrowth">
                <div className="bg-blue-50 flex items-center gap-2 w-32 text-center py-2 px-4 rounded">
                  <Image src={IncomingIcon} alt="" />
                  <p className="font-semibold">Checkout</p>
                </div>
                <p className="text-3xl font-semibold">Sell to businesses</p>
                <p className="text-xl text-gray-600">
                  Launch a B2B business and collect one-time or recurring
                  payments from customers.
                </p>
                <div className="last-element pt-8 cursor-pointer">
                  <p className="text-my-blue text-xl font-semibold pb-1">
                    Explore Invoicing
                  </p>
                  <Image src={ArrowRight} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
