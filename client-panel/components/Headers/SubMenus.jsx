import Link from "next/link";

const SubMenus = ({ menuName }) => {
  return (
    <div
      className={`w-56 absolute top-10 bg-white border border-gray-100 rounded ${
        menuName === "explorefuture" ? "opacity-100 z-10" : "opacity-0 -z-10"
      }`}
    >
      <Link href={"/store-links"}>
        <p className="border-t border-b border-gray-100 cursor-pointer hover:bg-gray-800 hover:text-white px-5 py-2">
          Full Report
        </p>
      </Link>
      <Link href={"/store-links"}>
        <p className="border-t border-b border-gray-100 cursor-pointer hover:bg-gray-800 hover:text-white px-5 py-2">
          Daily Fate
        </p>
      </Link>
      <Link href={"/store-links"}>
        <p className="border-t border-b border-gray-100 cursor-pointer hover:bg-gray-800 hover:text-white px-5 py-2">
          Love Fate
        </p>
      </Link>
      <Link href={"/store-links"}>
        <p className="border-t border-b border-gray-100 cursor-pointer hover:bg-gray-800 hover:text-white px-5 py-2">
          Finance Fate
        </p>
      </Link>
    </div>
  );
};

export default SubMenus;
