import Link from "next/link";

const Header = ({ toggleSidebar }) => {
  return (
    <div className={`shadow-sm fixed left-0 right-0 bg-white z-50`}>
      <div className="mx-auto flex justify-between items-center flex-wrap py-3 mycontainer">
        <button
          className="text-2xl text-black px-3 py-1 w-32 mr-auto text-start sm:block hidden"
          onClick={toggleSidebar}
        >
          ☰
        </button>
        <Link href="/">
          <p className="text-2xl text-my-gold">My Fate</p>
        </Link>
        <button
          className="text-2xl text-black px-3 py-1 block sm:hidden"
          onClick={toggleSidebar}
        >
          ☰
        </button>
        <div className="gap-2 hidden sm:flex w-0 sm:w-32 ml-auto text-end">
          <Link href="signup">
            <p className="cursor-pointer hover:text-gray-800 text-my-text-gray">
              Sign Up
            </p>
          </Link>
          <p className="text-my-text-gray">/</p>
          <Link href="/login">
            <p className="text-my-text-gray cursor-pointer hover:text-gray-800">
              Login
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
