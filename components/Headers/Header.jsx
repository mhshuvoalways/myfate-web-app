const Header = ({ isOpen, scrollDirection, toggleSidebar }) => {
  return (
    <div
      className={`shadow-sm fixed left-0 right-0 transition-transform duration-500 ease-in-out bg-white ${
        isOpen ? "-z-10" : "z-20"
      } ${scrollDirection ? "transform-none" : "-translate-y-full"}`}
    >
      <div className="w-11/12 mx-auto flex justify-between items-center flex-wrap py-5">
        <button
          className="text-xl bg-gray-600 text-white px-3 py-1"
          onClick={toggleSidebar}
        >
          ☰
        </button>
        <p className="text-2xl text-my-gold cursor-pointer">My Fate</p>
        <div className="gap-5 items-center hidden sm:flex">
          <div className="flex gap-2">
            <p className="cursor-pointer hover:text-gray-800 text-my-text-gray">
              Sign Up
            </p>
            <p className="text-my-text-gray">/</p>
            <p className="text-my-text-gray cursor-pointer hover:text-gray-800">
              Login
            </p>
          </div>
          <i className="fa-solid fa-cart-shopping text-xl"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
