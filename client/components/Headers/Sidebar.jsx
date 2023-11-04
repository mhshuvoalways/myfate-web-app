import Link from "next/link";
import { useDispatch } from "react-redux";
import { logout } from "@/store/actions/userAction";
import { useRouter } from "next/router";

const Sidebar = ({ isOpen, toggleSidebar, isAuth }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <div
      className={`bg-white h-screen transform transition-all duration-300 shadow-lg fixed ${
        isOpen
          ? "translate-x-0 w-full sm:w-4/12 z-[60]"
          : "-translate-x-full w-0 opacity-0 -z-10"
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
              <p className="cursor-pointer text-my-text-gray my-4 hover:text-gray-800">
                Home
              </p>
            </Link>
            <Link href="/store-links">
              <p className="cursor-pointer text-my-text-gray my-4 hover:text-gray-800">
                Store Links
              </p>
            </Link>
            <Link href="/pricing">
              <p className="cursor-pointer text-my-text-gray my-4 hover:text-gray-800">
                Pricing
              </p>
            </Link>
            <Link href="/past-life">
              <p className="cursor-pointer text-my-text-gray my-4 hover:text-gray-800">
                Past Life
              </p>
            </Link>
            {isAuth ? (
              <p
                className="cursor-pointer text-my-text-gray my-4 hover:text-gray-800"
                onClick={() => dispatch(logout(router))}
              >
                Logout
              </p>
            ) : (
              <Link href="/login">
                <p className="cursor-pointer text-my-text-gray my-4 hover:text-gray-800">
                  Login
                </p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
