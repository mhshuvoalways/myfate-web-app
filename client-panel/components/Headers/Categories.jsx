import { useState } from "react";
import Link from "next/link";
import SubMenus from "./SubMenus";

const Categories = () => {
  const [menuName, setMenuName] = useState("");

  return (
    <div>
      <div className="border-b border-gray-100 hidden sm:block">
        <div className="flex justify-center gap-14 mycontainer">
          <div
            className="relative"
            onMouseEnter={() => setMenuName("explorefuture")}
            onMouseLeave={() => setMenuName("")}
          >
            <p className="cursor-pointer hover:text-my-text-gray font-gabarito uppercase text-xs py-3">
              Explore Future
            </p>
            <SubMenus menuName={menuName} setMenuName={setMenuName} />
          </div>
          <Link href="/horoscope">
            <p className="cursor-pointer hover:text-my-text-gray font-gabarito uppercase text-xs py-3">
              Free Horoscope
            </p>
          </Link>
          <p className="cursor-pointer hover:text-my-text-gray font-gabarito uppercase text-xs py-3">
            Celebrity Future
          </p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
