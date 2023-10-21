import Banner from "../Banner";
import Description from "./Description";
import Button from "../Button";

const index = () => {
  return (
    <div>
      <Banner />
      <div className="bg-black py-10 px-5 h-screen">
        <Description />
        <Button value="Go to draw the past life card" />
      </div>
    </div>
  );
};

export default index;
