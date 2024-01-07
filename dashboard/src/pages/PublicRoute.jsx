import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import moment from "moment";

const PrivateRoute = ({ children }) => {
  const userReducer = useSelector((store) => store.userReducer);

  return userReducer.user?.subscriptionPlan?.expireDate >
    moment(new Date()).format("YYYY-MM-DD") ? (
    children
  ) : (
    <Navigate to="/answer" />
  );
};

export default PrivateRoute;
