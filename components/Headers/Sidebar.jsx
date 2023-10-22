import Link from "next/link";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`bg-white h-screen transform transition-all duration-300 shadow-lg fixed z-[60] ${
        isOpen
          ? "translate-x-0 w-full sm:w-4/12"
          : "-translate-x-full w-0 opacity-0"
      }`}
    >
      <p
        className="text-end p-5 text-xl cursor-pointer"
        onClick={toggleSidebar}
      >
        ✕
      </p>
      <div className={isOpen && "px-10"}>
        <div className="py-5">
          <p className="text-2xl pb-2">Home</p>
          <hr />
          <div className="pt-3">
            <Link href="/">
              <p className="cursor-pointer text-my-text-gray my-2 hover:text-gray-800">
                Home
              </p>
            </Link>
            <Link href="/storeLinks">
              <p className="cursor-pointer text-my-text-gray my-2 hover:text-gray-800">
                Store Links
              </p>
            </Link>
            <Link href="/pricing">
              <p className="cursor-pointer text-my-text-gray my-2 hover:text-gray-800">
                Pricing
              </p>
            </Link>
            <Link href="/past-life">
              <p className="cursor-pointer text-my-text-gray my-2 hover:text-gray-800">
                Past Life
              </p>
            </Link>
            <Link href="/login">
              <p className="cursor-pointer text-my-text-gray my-2 hover:text-gray-800">
                Login
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
