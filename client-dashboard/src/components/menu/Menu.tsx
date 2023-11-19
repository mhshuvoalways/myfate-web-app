import { Link } from "react-router-dom";
import "./menu.scss";
import { menu } from "../../data";

const Menu = () => {
  const logoutHandler = () => {
    localStorage.clear();
  };

  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((listItem) =>
            listItem.title === "Logout" ? (
              <Link
                to={listItem.url}
                className="listItem"
                key={listItem.id}
                onClick={logoutHandler}
              >
                <img src={listItem.icon} alt="" />
                <span className="listItemTitle">{listItem.title}</span>
              </Link>
            ) : (
              <Link to={listItem.url} className="listItem" key={listItem.id}>
                <img src={listItem.icon} alt="" />
                <span className="listItemTitle">{listItem.title}</span>
              </Link>
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default Menu;
