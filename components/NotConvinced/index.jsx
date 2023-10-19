import Sliders from "./Sliders";
import TextAnimation from "../TextAnimation";

const index = () => {
  return (
    <div className="mt-32">
      <div className="mycontainer">
        <TextAnimation
          letters={"Not convinced yet?"}
          className={"text-4xl md:text-5xl lg:text-6xl font-semibold"}
        />
        <TextAnimation
          letters={`There's more!`}
          className={
            "text-4xl md:text-5xl lg:text-6xl mt-0 md:mt-4 font-semibold text-my-yellow"
          }
        />
      </div>
      <div className="mt-20 space-y-14">
        <Sliders />
        <Sliders rtl />
        <Sliders />
      </div>
    </div>
  );
};

export default index;
