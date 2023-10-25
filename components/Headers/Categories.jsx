import { useState } from "react";
import SubMenus from "./SubMenus";

const Categories = () => {
  const [menuName, setMenuName] = useState("");

  return (
    <div>
      <div className="border-b border-gray-100 py-2 hidden sm:block">
        <div className="flex justify-evenly gap-5 mycontainer">
          <p className="cursor-pointer hover:text-my-text-gray font-gabarito uppercase text-xs">
            Home
          </p>
          <div
            className="relative"
            onMouseEnter={() => setMenuName("explorefuture")}
            onMouseLeave={() => setMenuName("")}
          >
            <p className="cursor-pointer hover:text-my-text-gray font-gabarito uppercase text-xs">
              Explore Future
            </p>
            <SubMenus menuName={menuName} setMenuName={setMenuName} />
          </div>
          <p className="cursor-pointer hover:text-my-text-gray font-gabarito uppercase text-xs">
            Fun Tests
          </p>
          <p className="cursor-pointer hover:text-my-text-gray font-gabarito uppercase text-xs">
            Celebrity Future
          </p>
          <p className="cursor-pointer hover:text-my-text-gray font-gabarito uppercase text-xs">
            Learn
          </p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
