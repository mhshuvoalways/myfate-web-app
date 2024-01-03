import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import SubMenus from "./SubMenus";
import Language from './Language'

const Categories = () => {
  const [menuName, setMenuName] = useState("");
  const { t } = useTranslation("subMenus");
  const menusItems = t("submenus", { returnObjects: true });
  const subMenusItems = t("items", { returnObjects: true });

  return (
    <div>
      <div className="border-b border-gray-100 hidden sm:block">
        <div className="flex justify-center gap-14 mycontainer">
          {menusItems.map((el) => (
            <div key={el}>
              {el === "EXPLORE FUTURE" || el === "未来を探索" ? (
                <div
                  className="relative"
                  onMouseEnter={() => setMenuName("explorefuture")}
                  onMouseLeave={() => setMenuName("")}
                >
                  <p className="cursor-pointer hover:text-my-text-gray font-gabarito uppercase text-xs pb-1">
                    {el}
                  </p>
                  <SubMenus menuName={menuName} subMenusItems={subMenusItems} />
                </div>
              ) : (
                <Link href="/horoscope">
                  <p className="cursor-pointer hover:text-my-text-gray font-gabarito uppercase text-xs pb-1">
                    {el}
                  </p>
                </Link>
              )}
            </div>
          ))}
          <Language/>
        </div>
      </div>
    </div>
  );
};

export default Categories;
