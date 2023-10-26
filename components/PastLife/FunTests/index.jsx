import { useState } from "react";
import Banner from "../Banner";
import Description from "./Description";
import Button from "../Button";

const Index = () => {
  const [selectPic, setSelectPic] = useState({
    itemNumber: "",
    imgNumber: "",
  });

  return (
    <>
      <Banner />
      <div className="bg-black py-10">
        <Description selectPic={selectPic} setSelectPic={setSelectPic} />
        <Button
          value="Go to draw the past life card"
          seletGender={selectPic.itemNumber && selectPic.imgNumber}
          nextPath={
            selectPic.itemNumber &&
            selectPic.imgNumber &&
            "/past-life/what-happens"
          }
        />
      </div>
    </>
  );
};

export default Index;
