import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./pages/PrivateRoute";
import Time from "./pages/Time";
import DReport from "./pages/DReport";
import Login from "./pages/Login";
import Tostify from "./components/utils/Toastify";
import Loading from "./components/utils/Loading";
import { isAuthenticate } from "../store/actions/userAction";

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
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Tostify />
      <Loading />
    </div>
  );
};

export default App;
