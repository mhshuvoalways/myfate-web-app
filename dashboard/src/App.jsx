import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./pages/PrivateRoute";
import Time from "./pages/Time";
import DReport from "./pages/DReport";
import Finance from "./pages/Finance";
import Love from "./pages/Love";
import UserInfo from "./pages/UserInfo";
import Tostify from "./components/utils/Toastify";
import Loading from "./components/utils/Loading";
import { isAuthenticate } from "../store/actions/userAction";
import Answer from "./pages/Answere";
import { useTranslation } from "react-i18next";

const App = () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  useEffect(() => {
    dispatch(isAuthenticate());
  }, [dispatch]);

  useEffect(() => {
    const preferredLanguage = localStorage.getItem("language");
    if (!preferredLanguage) {
      setTimeout(() => {
        const userLanguage = window.confirm("Switch to Japan?") ? "jp" : "en";
        i18n.changeLanguage(userLanguage);
        localStorage.setItem("language", userLanguage);
      }, 2000);
    } else {
      i18n.changeLanguage(preferredLanguage);
    }
  }, [i18n]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Time />
              </PrivateRoute>
            }
          />
          <Route
            path="/d-report"
            element={
              <PrivateRoute>
                <DReport />
              </PrivateRoute>
            }
          />
          <Route
            path="/finance"
            element={
              <PrivateRoute>
                <Finance />
              </PrivateRoute>
            }
          />
          <Route
            path="/love"
            element={
              <PrivateRoute>
                <Love />
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
