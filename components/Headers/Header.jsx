const Header = ({ toggleSidebar }) => {
  return (
    <div className={`shadow-sm fixed left-0 right-0 bg-white z-30`}>
      <div className="w-10/12 mx-auto flex justify-between items-center flex-wrap py-3">
        <button
          className="text-2xl text-black px-3 py-1 sm:block hidden"
          onClick={toggleSidebar}
        >
          ☰
        </button>
        <p className="text-2xl text-my-gold cursor-pointer">
          My Fate
        </p>
        <button
          className="text-2xl text-black px-3 py-1 block sm:hidden"
          onClick={toggleSidebar}
        >
          ☰
        </button>
        <div className="gap-2 hidden sm:flex">
          <p className="cursor-pointer hover:text-gray-800 text-my-text-gray">
            Sign Up
          </p>
          <p className="text-my-text-gray">/</p>
          <p className="text-my-text-gray cursor-pointer hover:text-gray-800">
            Login
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
