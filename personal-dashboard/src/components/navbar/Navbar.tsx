import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <p>Admin Dashboard</p>
      </div>
      <Link to="/" className="icons">
        <div className="user">
          <img
            src="https://learnyzen.com/wp-content/uploads/2017/08/test1-481x385.png"
            alt=""
          />
          <span>Jane</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </Link>
    </div>
  );
};

export default Navbar;
