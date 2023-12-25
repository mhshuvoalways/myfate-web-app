import Link from "next/link";
import { Fade } from "react-reveal";
import TextAnimation from "../Utils/TextAnimation";
import Button from "../common/Button";

const index = () => {
  return (
    <div className={`py-16 bg-center bg-no-repeat gswsl flex items-center`}>
      <div className="mycontainer">
        <div className="w-full md:w-7/12 space-y-10">
          <div>
            <TextAnimation
              letters={[
                {
                  letter: "Connect",
                  delay: "0",
                },
                {
                  letter: "to",
                  delay: "0.20",
                },
                {
                  letter: "your",
                  delay: "0.30",
                },
                {
                  letter: "future",
                  delay: "0.40",
                },
              ]}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold"
            />
            <TextAnimation
              letters={[
                {
                  letter: "Find",
                  delay: "0.50",
                },
                {
                  letter: "out",
                  delay: "0.60",
                },
                {
                  letter: "now",
                  delay: "0.70",
                },
              ]}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-my-blue"
            />
          </div>
          <Fade bottom>
            <div>
              <p className="text-2xl">Connect to your future</p>
              <p className="text-xl text-my-blue">Find out now</p>
            </div>
            <Link href={"/payment"}>
              <Button value={"Start Now"} className={"!bg-[#262A56]"} />
            </Link>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default index;
