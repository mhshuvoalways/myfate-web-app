import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { isAuthenticate } from "@/store/actions/userAction";
import DashIcon from "@/public/header/dashboardicon.png";

const Header = ({ toggleSidebar, userReducer }) => {
  const dispatch = useDispatch();

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
          <Image
            src={"/header/logo.png"}
            className="mr-0 sm:mr-2.5 w-16"
            width={200}
            height={200}
          />
        </Link>
        <button
          className="text-[26px] text-black block sm:hidden"
          onClick={toggleSidebar}
        >
          ☰
        </button>
        <div className="gap-2 hidden sm:flex w-0 sm:w-32 ml-auto text-end">
          {userReducer.isAuthenticate ? (
            userReducer.user?.subscriptionPlan?.planType ? (
              <div className="w-0 sm:w-6 cursor-pointer ml-auto hidden sm:block">
                <Image src={DashIcon} alt="" />
              </div>
            ) : (
              <Link
                href={"/pricing?suggest=payment"}
                className="w-0 sm:w-6 cursor-pointer ml-auto hidden sm:block"
              >
                <Image src={DashIcon} alt="" />
              </Link>
            )
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
