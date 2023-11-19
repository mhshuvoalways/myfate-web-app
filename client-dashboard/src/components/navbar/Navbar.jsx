import "./navbar.scss";
import { useSelector } from "react-redux";

const Navbar = () => {
  const reportReducer = useSelector((store) => store.userReducer);

  return (
    <div className="navbar">
      <div className="logo">
        <p>Admin Dashboard</p>
      </div>
      <div className="icons">
        {/* <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div> */}
        <div className="user">
          <img
            src="https://learnyzen.com/wp-content/uploads/2017/08/test1-481x385.png"
            alt=""
          />
          <div className="space-x-1">
            <span>{reportReducer.user.profile?.firstName}</span>
            <span>{reportReducer.user.profile?.lastName}</span>
          </div>
        </div>
        {/* <img src="/settings.svg" alt="" className="icon" /> */}
      </div>
    </div>
  );
};

export default Navbar;
