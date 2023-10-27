const SubMenus = ({ menuName, setMenuName }) => {
  return (
    <div
      className={`w-56 absolute top-6 bg-white mt-2 border border-gray-100 rounded ${
        menuName === "explorefuture" ? "opacity-100 z-10" : "opacity-0 -z-10"
      }`}
      onMouseEnter={() => setMenuName("explorefuture")}
      onMouseLeave={() => setMenuName("")}
    >
      <p className="border-t border-b border-gray-100 cursor-pointer hover:bg-gray-800 hover:text-white px-5 py-2">
        My Fate
      </p>
      <p className="border-t border-b border-gray-100 cursor-pointer hover:bg-gray-800 hover:text-white px-5 py-2">
        Daily Fate
      </p>
      <p className="border-t border-b border-gray-100 cursor-pointer hover:bg-gray-800 hover:text-white px-5 py-2">
        Love Fate
      </p>
      <p className="border-t border-b border-gray-100 cursor-pointer hover:bg-gray-800 hover:text-white px-5 py-2">
        Finance Fate
      </p>
    </div>
  );
};

export default SubMenus;
