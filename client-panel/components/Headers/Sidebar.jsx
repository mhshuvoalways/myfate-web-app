import Link from "next/link";
import { useDispatch } from "react-redux";
import { logout } from "@/store/actions/userAction";
import { useRouter } from "next/router";

const Sidebar = ({ isOpen, toggleSidebar, userReducer }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <div
      className={`bg-white h-screen transform transition-all duration-300 shadow-lg fixed ${
        isOpen
          ? "translate-x-0 w-full sm:w-3/12 z-[60] overflow-y-scroll"
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
          <div>
            <Link href="/">
              <p className="cursor-pointer text-my-text-gray my-4 hover:text-gray-800">
                Home
              </p>
            </Link>
            <Link href="/fullreport">
              <p className="cursor-pointer text-my-text-gray my-4 hover:text-gray-800">
                Entire Life
              </p>
            </Link>
            <Link href="/horoscope">
              <p className="cursor-pointer text-my-text-gray my-4 hover:text-gray-800">
                Free Horoscope
              </p>
            </Link>
            <Link href="/">
              <p className="cursor-pointer text-my-text-gray my-4 hover:text-gray-800">
                Celebrity Future
              </p>
            </Link>
          </div>
        </div>
        <div className="py-5">
          <p className="text-2xl pb-2">Dashboard</p>
          <hr />
          <div>
            <Link href="/fullreport">
              <p className="cursor-pointer text-my-text-gray my-4 hover:text-gray-800">
                Entire Life
              </p>
            </Link>
            <Link href="/">
              <p className="cursor-pointer text-my-text-gray my-4 hover:text-gray-800">
                Daily Outlook
              </p>
            </Link>
            <Link href="/horoscope">
              <p className="cursor-pointer text-my-text-gray my-4 hover:text-gray-800">
                Love Outlook
              </p>
            </Link>
            <Link href="/">
              <p className="cursor-pointer text-my-text-gray my-4 hover:text-gray-800">
                Finance Outlook
              </p>
            </Link>
          </div>
        </div>
        <div className="py-5">
          <p className="text-2xl pb-2">Account</p>
          <hr />
          <div>
            {userReducer.isAuthenticate ? (
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
