import Sliders from "./Sliders";

const index = () => {
  return (
    <div className="mt-32">
      <div className="w-10/12 mx-auto">
        <p className="text-4xl md:text-5xl lg:text-6xl font-semibold">
          Not convinced yet?
        </p>
        <p className="text-4xl md:text-5xl lg:text-6xl mt-0 md:mt-4 font-semibold text-my-yellow">{`There's more!`}</p>
      </div>
      <div className="mt-10 space-y-14">
        <Sliders />
        <Sliders rtl/>
        <Sliders />
      </div>
    </div>
  );
};

export default index;
