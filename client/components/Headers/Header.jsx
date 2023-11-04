import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { isAuthenticate, logout } from "@/store/actions/userAction";

const Header = ({ toggleSidebar, isAuth }) => {
  const dispatch = useDispatch();

  const router = useRouter();

  useEffect(() => {
    dispatch(isAuthenticate());
  }, [dispatch]);

  return (
    <div className={`shadow-sm fixed left-0 right-0 bg-white z-50`}>
      <div className="mx-auto flex justify-between items-center flex-wrap py-3 mycontainer">
        <button
          className="text-[26px] text-black w-32 mr-auto text-start sm:block hidden"
          onClick={toggleSidebar}
        >
          ☰
        </button>
        <Link href="/">
          <p className="text-2xl text-my-gold mr-0 sm:mr-2.5">My Fate</p>
        </Link>
        <button
          className="text-[26px] text-black block sm:hidden"
          onClick={toggleSidebar}
        >
          ☰
        </button>
        <div className="gap-2 hidden sm:flex w-0 sm:w-32 ml-auto text-end">
          {isAuth ? (
            <p
              className="cursor-pointer hover:text-gray-800 text-my-text-gray w-0 sm:w-32 ml-auto hidden sm:block"
              onClick={() => dispatch(logout(router))}
            >
              Logout
            </p>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
