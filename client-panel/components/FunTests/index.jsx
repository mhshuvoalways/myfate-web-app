import Image from "next/image";
import Img1 from "@/public/funtests/img1.png";
import Img2 from "@/public/funtests/img2.png";
import Img3 from "@/public/funtests/img3.png";
import Img4 from "@/public/funtests/img4.png";
import Link from "next/link";

const index = () => {
  return (
    <div className="mycontainer my-24">
      <div className="flex justify-center lg:justify-between gap-5 flex-wrap items-center space-y-5">
        <div className="space-y-2 -mb-5 w-full sm:w-[48%] lg:w-[23%]">
          <Link href={"/template"}>
            <Image src={Img1} alt="" className="w-full mb-2" />
            <small>SYNASTRY</small>
            <p className="">Sun / Chiron Aspects in Synastry</p>
            <p className="text-sm">
              The interpretation for Sun/Chiron Aspects within a Synastry
              relationship chart
            </p>
          </Link>
        </div>
        <div className="space-y-2 w-full sm:w-[48%] lg:w-[23%]">
          <Link href={"/template"}>
            <Image src={Img2} alt="" className="w-full mb-2" />
            <small>SYNASTRY</small>
            <p className="">Sun / Chiron Aspects in Synastry</p>
            <p className="text-sm">
              The interpretation for Sun/Chiron Aspects within a Synastry
              relationship chart
            </p>
          </Link>
        </div>
        <div className="space-y-2 w-full sm:w-[48%] lg:w-[23%]">
          <Link href={"/template"}>
            <Image src={Img3} alt="" className="w-full mb-2" />
            <small>SYNASTRY</small>
            <p className="">Sun / Chiron Aspects in Synastry</p>
            <p className="text-sm">
              The interpretation for Sun/Chiron Aspects within a Synastry
              relationship chart
            </p>
          </Link>
        </div>
        <div className="space-y-2 w-full sm:w-[48%] lg:w-[23%]">
          <Link href={"/template"}>
            <Image src={Img4} alt="" className="w-full mb-2" />
            <small>SYNASTRY</small>
            <p className="">Sun / Chiron Aspects in Synastry</p>
            <p className="text-sm">
              The interpretation for Sun/Chiron Aspects within a Synastry
              relationship chart
            </p>
          </Link>
        </div>
        <div className="space-y-2 w-full sm:w-[48%] lg:w-[23%]">
          <Link href={"/template"}>
            <Image src={Img1} alt="" className="w-full mb-2" />
            <small>SYNASTRY</small>
            <p className="">Sun / Chiron Aspects in Synastry</p>
            <p className="text-sm">
              The interpretation for Sun/Chiron Aspects within a Synastry
              relationship chart
            </p>
          </Link>
        </div>
        <div className="space-y-2 w-full sm:w-[48%] lg:w-[23%]">
          <Link href={"/template"}>
            <Image src={Img2} alt="" className="w-full mb-2" />
            <small>SYNASTRY</small>
            <p className="">Sun / Chiron Aspects in Synastry</p>
            <p className="text-sm">
              The interpretation for Sun/Chiron Aspects within a Synastry
              relationship chart
            </p>
          </Link>
        </div>
        <div className="space-y-2 w-full sm:w-[48%] lg:w-[23%]">
          <Link href={"/template"}>
            <Image src={Img3} alt="" className="w-full mb-2" />
            <small>SYNASTRY</small>
            <p className="">Sun / Chiron Aspects in Synastry</p>
            <p className="text-sm">
              The interpretation for Sun/Chiron Aspects within a Synastry
              relationship chart
            </p>
          </Link>
        </div>
        <div className="space-y-2 w-full sm:w-[48%] lg:w-[23%]">
          <Link href={"/template"}>
            <Image src={Img4} alt="" className="w-full mb-2" />
            <small>SYNASTRY</small>
            <p className="">Sun / Chiron Aspects in Synastry</p>
            <p className="text-sm">
              The interpretation for Sun/Chiron Aspects within a Synastry
              relationship chart
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default index;
