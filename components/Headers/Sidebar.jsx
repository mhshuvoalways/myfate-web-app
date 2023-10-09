const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`bg-white h-screen transform transition-all duration-300 shadow-lg fixed z-50 ${
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
      <div className="px-10">
        <div className="py-5">
          <p className="text-2xl pb-2">Home</p>
          <hr />
          <div className="pt-3">
            <p className="cursor-pointer text-my-text-gray my-2 hover:text-gray-800">
              Sign Up
            </p>
            <p className="cursor-pointer text-my-text-gray my-2 hover:text-gray-800">
              Login
            </p>
            <p className="cursor-pointer text-my-text-gray my-2 hover:text-gray-800">
              Cart
            </p>
          </div>
        </div>
        <div className="py-5">
          <p className="text-2xl pb-2">Home</p>
          <hr />
          <div className="pt-3">
            <p className="cursor-pointer text-my-text-gray my-2 hover:text-gray-800">
              Sign Up
            </p>
            <p className="cursor-pointer text-my-text-gray my-2 hover:text-gray-800">
              Login
            </p>
            <p className="cursor-pointer text-my-text-gray my-2 hover:text-gray-800">
              Cart
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
