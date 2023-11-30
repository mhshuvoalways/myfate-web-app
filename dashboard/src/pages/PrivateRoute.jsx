import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const userReducer = useSelector((store) => store.userReducer);
  return userReducer.isAuthenticate ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
