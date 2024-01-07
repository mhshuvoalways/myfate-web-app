import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./pages/PrivateRoute";
import PublicRoute from "./pages/PublicRoute";
import Time from "./pages/Time";
import DReport from "./pages/DReport";
import Finance from "./pages/Finance";
import Love from "./pages/Love";
import UserInfo from "./pages/UserInfo";
import Tostify from "./components/utils/Toastify";
import Loading from "./components/utils/Loading";
import { isAuthenticate } from "../store/actions/userAction";
import Answer from "./pages/Answere";
import Account from "./pages/Account";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isAuthenticate());
  }, [dispatch]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <PublicRoute>
                  <Time />
                </PublicRoute>
              </PrivateRoute>
            }
          />
          <Route
            path="/d-report"
            element={
              <PrivateRoute>
                <PublicRoute>
                  <DReport />
                </PublicRoute>
              </PrivateRoute>
            }
          />
          <Route
            path="/finance"
            element={
              <PrivateRoute>
                <PublicRoute>
                  <Finance />
                </PublicRoute>
              </PrivateRoute>
            }
          />
          <Route
            path="/love"
            element={
              <PrivateRoute>
                <PublicRoute>
                  <Love />
                </PublicRoute>
              </PrivateRoute>
            }
          />
          <Route
            path="/account"
            element={
              <PrivateRoute>
                <PublicRoute>
                  
                  <Account />
                </PublicRoute>
              </PrivateRoute>
            }
          />
          <Route path="/answer" element={<Answer />} />
          <Route path="/userinfo" element={<UserInfo />} />
        </Routes>
      </BrowserRouter>
      <Tostify />
      <Loading />
    </div>
  );
};

export default App;
