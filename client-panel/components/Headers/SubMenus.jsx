import Link from "next/link";

const SubMenus = ({ menuName, subMenusItems }) => {
  return (
    <div
      className={`w-56 absolute top-8 bg-white border border-gray-100 rounded ${
        menuName === "explorefuture" ? "opacity-100 z-10" : "opacity-0 -z-10"
      }`}
    >
      {subMenusItems.map((el) => (
        <Link href={`/${el.replace(" ", "").toLowerCase()}`} key={el}>
          <p className="border-t border-b border-gray-100 cursor-pointer hover:bg-gray-800 hover:text-white px-5 py-2">
            {el}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default SubMenus;
