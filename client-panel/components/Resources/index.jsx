import Image from "next/image";

const index = () => {
  return (
    <div className="resource bg-gray-50 py-16 sm:py-28">
      <div class="mycontainer">
        <p className="resource-title text-center text-3xl">
          Endless journey to find who you are
        </p>
        <p className="mt-5 w-full sm:w-8/12 mx-auto text-center">
          Our goal is to empower girls and boys to be more confident of
          themselves.
        </p>
        <div className="flex justify-between items-center gap-10 mt-14 flex-wrap md:flex-nowrap">
          <div className="w-full md:w-4/12">
            <p className="resource-sec-title text-2xl">
              Loved for thousands of years
            </p>
            <div className="flex items-center gap-3 mt-6">
              <Image src={"/pricing/tick.svg"} alt="" width={15} height={15} />
              <p>Comprehensive overview of you.</p>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <Image src={"/pricing/tick.svg"} width={15} height={15} alt="" />
              <p>Positive energy to refill your mood.</p>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <Image src={"/pricing/tick.svg"} alt="" width={15} height={15} />
              <p>Impressive accuracy.</p>
            </div>
          </div>
          <Image
            src={"/resources/1.jpg"}
            alt=""
            width={800}
            height={800}
            className="rounded-3xl w-full md:w-6/12"
          />
        </div>
        <div className="flex justify-between items-center gap-10 mt-20 flex-wrap md:flex-nowrap">
          <Image
            src={"/resources/2.jpg"}
            alt=""
            width={800}
            height={800}
            className="rounded-3xl w-full md:w-6/12"
          />
          <div className="w-full md:w-4/12">
            <p className="resource-sec-title text-2xl">Personalized report</p>
            <div className="flex items-center gap-3 mt-6">
              <Image src={"/pricing/tick.svg"} alt="" width={15} height={15} />
              <p>Consider both nature and nurture.</p>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <Image src={"/pricing/tick.svg"} width={15} height={15} alt="" />
              <p>Personality considered for maximum accuracy.</p>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <Image src={"/pricing/tick.svg"} alt="" width={15} height={15} />
              <p>Horoscope you have never seen before.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
