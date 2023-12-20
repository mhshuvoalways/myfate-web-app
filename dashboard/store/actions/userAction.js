import { jwtDecode } from "jwt-decode";
import * as Types from "../constants/userTypes";
import { CLEAR_DATA } from "../constants/clearDataType";
import setAuthToken from "../../utils/setAuthToken";
import axios from "../../utils/axios";
import notiAction from "./notiAction";
import enableBtn from "./btnAction";

export const userLogin = (user, navigate) => (dispatch) => {
  dispatch(enableBtn(false));
  axios
    .post("/user/loginclientdashboard", user)
    .then((response) => {
      dispatch(enableBtn(true));
      setAuthToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      dispatch(isAuthenticate());
      dispatch(addReport(user));
      dispatch(addAllReports(user, navigate));
    })
    .catch((err) => {
      dispatch({
        type: Types.LOGIN_USER_ERROR,
        payload: {
          error: err.response?.data,
        },
      });
      dispatch(enableBtn(true));
      dispatch(notiAction(err.response?.data.message));
      navigate("/userinfo");
    });
};

export const isAuthenticate = () => (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    var decoded = jwtDecode(token);
    var dateNow = new Date();
    if (decoded.exp * 1000 < dateNow.getTime()) {
      dispatch({
        type: Types.ISAUTHENTICATE,
        payload: {
          isAuthenticate: false,
        },
      });
      localStorage.removeItem("token");
      setAuthToken("");
    } else {
      dispatch({
        type: Types.ISAUTHENTICATE,
        payload: {
          isAuthenticate: true,
        },
      });
      dispatch(getMyAccount());
    }
  } else {
    dispatch({
      type: Types.ISAUTHENTICATE,
      payload: {
        isAuthenticate: false,
      },
    });
    setAuthToken("");
  }
};

export const getMyAccount = () => (dispatch) => {
  axios
    .get("/user/getmyaccount")
    .then((res) => {
      dispatch({
        type: Types.GET_MYACCOUT,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.GET_MYACCOUT,
        payload: err.response?.data,
      });
    });
};

export const addReport = (userValue) => (dispatch) => {
  dispatch(enableBtn(false));
  axios
    .post("/reports/addreports", userValue)
    .then(() => {
      dispatch(enableBtn(true));
    })
    .catch((err) => {
      dispatch(enableBtn(true));
      dispatch(notiAction(err.response?.data.message));
    });
};

export const addAllReports = (user, navigate) => (dispatch) => {
  dispatch(enableBtn(false));
  axios
    .post("/report/addreport", user)
    .then(() => {
      dispatch(enableBtn(true));
    })
    .catch((err) => {
      dispatch(notiAction(err.response?.data.message));
      dispatch(enableBtn(true));
    });
  axios
    .post("/love/addlove", user)
    .then(() => {
      dispatch(enableBtn(true));
    })
    .catch((err) => {
      dispatch(enableBtn(true));
      dispatch(notiAction(err.response?.data.message));
    });
  axios
    .post("/finance/addfinance", user)
    .then(() => {
      dispatch(enableBtn(true));
      navigate("/");
    })
    .catch((err) => {
      dispatch(enableBtn(true));
      dispatch(notiAction(err.response?.data.message));
    });
};

export const logout = (navigate) => (dispatch) => {
  dispatch({
    type: Types.LOGOUT_USER,
    payload: {
      isAuthenticate: false,
    },
  });
  dispatch({
    type: CLEAR_DATA,
  });
  localStorage.removeItem("token");
  setAuthToken("");
  navigate("/userinfo");
};
