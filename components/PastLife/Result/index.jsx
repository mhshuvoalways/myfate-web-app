import Banner from "../Banner";
import Description from "./Description";
import Button from "../Button";

const index = () => {
  return (
    <div>
      <Banner />
      <div className="bg-black pt-10 pb-40 px-5">
        <Description />
        <Button />
      </div>
    </div>
  );
};

export default index;
