import { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { isAuthenticate, logout } from "../../../store/actions/userAction";
import { CiClock1, CiCalendar, CiDollar, CiHeart } from "react-icons/ci";
import { PiUserCircle } from "react-icons/pi";

const SidebarHeader = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    dispatch(isAuthenticate(navigate));
  }, [dispatch, navigate]);

  return (
    <div className="sm:flex">
      <div
        className={`bg-gray-900 text-gray-100 shadow-lg h-auto sm:h-screen sm:flex items-center justify-center fixed bottom-0 left-0 right-0 sm:right-auto sm:bottom-auto z-50`}
      >
        <ul className="list-none flex sm:block justify-between w-full sm:w-auto px-10 sm:px-4 py-2 sm:space-y-5">
          <li>
            <Link to="/">
              <p>
                <CiClock1
                  className={`text-4xl sm:text-5xl rounded-xl p-1 ${
                    location.pathname === "/" && "bg-gray-600"
                  }`}
                />
              </p>
            </Link>
          </li>
          <li>
            <Link to="/d-report">
              <p>
                <CiCalendar
                  className={`text-4xl sm:text-5xl rounded-xl p-1 ${
                    location.pathname === "/d-report" && "bg-gray-600"
                  }`}
                />
              </p>
            </Link>
          </li>
          <li>
            <Link to="/finance">
              <p>
                <CiDollar
                  className={`text-4xl sm:text-5xl rounded-xl p-1 ${
                    location.pathname === "/finance" && "bg-gray-600"
                  }`}
                />
              </p>
            </Link>
          </li>
          <li>
            <Link to="/love">
              <p>
                <CiHeart
                  className={`text-4xl sm:text-5xl rounded-xl p-1 ${
                    location.pathname === "/love" && "bg-gray-600"
                  }`}
                />
              </p>
            </Link>
          </li>
          <li>
            <p>
              <PiUserCircle
                onClick={() => dispatch(logout(navigate))}
                className="text-4xl sm:text-5xl rounded-xl p-1 cursor-pointer"
              />
            </p>
          </li>
        </ul>
      </div>
      <div className={`p-10 w-full text-gray-700 sm:ml-20`}>{children}</div>
    </div>
  );
};

export default SidebarHeader;
