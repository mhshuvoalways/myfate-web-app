import Image from "next/image";

const index = () => {
  return (
    <div className="resource bg-gray-50 py-16 sm:py-28">
      <div class="mycontainer">
        <p className="resource-title text-center text-3xl">
          An array of resources
        </p>
        <p className="mt-5 w-full sm:w-8/12 mx-auto text-center">
          Our comprehensive suite of professional services caters to a diverse
          clientele, ranging from homeowners to commercial developers.
        </p>
        <div className="flex justify-between items-center gap-10 mt-14 flex-wrap md:flex-nowrap">
          <div className="w-full md:w-4/12">
            <p className="resource-sec-title text-2xl">Études Architect App</p>
            <div className="flex items-center gap-3 mt-6">
              <Image src={"/pricing/tick.svg"} alt="" width={15} height={15} />
              <p>Collaborate with fellow architects.</p>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <Image src={"/pricing/tick.svg"} width={15} height={15} alt="" />
              <p>Showcase your projects.</p>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <Image src={"/pricing/tick.svg"} alt="" width={15} height={15} />
              <p>Experience the world of architecture.</p>
            </div>
          </div>
          <Image
            src={"/resources/resoucecam.webp"}
            alt=""
            width={800}
            height={800}
            className="rounded-3xl w-full md:w-6/12"
          />
        </div>
        <div className="flex justify-between items-center gap-10 mt-20 flex-wrap md:flex-nowrap">
          <Image
            src={"/resources/resoucewindowa.webp"}
            alt=""
            width={800}
            height={800}
            className="rounded-3xl w-full md:w-6/12"
          />
          <div className="w-full md:w-4/12">
            <p className="resource-sec-title text-2xl">Études Architect App</p>
            <div className="flex items-center gap-3 mt-6">
              <Image src={"/pricing/tick.svg"} alt="" width={15} height={15} />
              <p>Collaborate with fellow architects.</p>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <Image src={"/pricing/tick.svg"} width={15} height={15} alt="" />
              <p>Showcase your projects.</p>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <Image src={"/pricing/tick.svg"} alt="" width={15} height={15} />
              <p>Experience the world of architecture.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
