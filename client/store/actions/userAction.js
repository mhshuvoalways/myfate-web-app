import { jwtDecode } from "jwt-decode";
import * as Types from "../constants/userTypes";
import { CLEAR_DATA } from "../constants/clearDataType";
import setAuthToken from "../../utils/setAuthToken";
import axios from "../../utils/axios";
import { notiAction, clearNotiAction } from "./notiAction";
import enableBtn from "./btnAction";

export const register = (user, navigate) => (dispatch) => {
  dispatch(enableBtn(false));
  dispatch(clearNotiAction(null));
  axios
    .post("/user/register", user)
    .then((response) => {
      dispatch(enableBtn(true));
      setAuthToken(response.data.token);
      typeof window !== "undefined" &&
        localStorage.setItem("token", response.data.token);
      navigate.push("/");
    })
    .catch((err) => {
      dispatch({
        type: Types.REGISTER_ERROR,
        payload: {
          error: err.response.data,
        },
      });
      dispatch(notiAction(err.response.data));
      dispatch(enableBtn(true));
    });
};

export const userLogin = (user, navigate) => (dispatch) => {
  dispatch(enableBtn(false));
  dispatch(clearNotiAction(null));
  axios
    .post("/user/login", user)
    .then((response) => {
      dispatch(enableBtn(true));
      setAuthToken(response.data.token);
      typeof window !== "undefined" &&
        localStorage.setItem("token", response.data.token);
      navigate.push("/");
    })
    .catch((err) => {
      dispatch({
        type: Types.LOGIN_USER_ERROR,
        payload: {
          error: err.response?.data,
        },
      });
      dispatch(notiAction(err.response?.data));
      dispatch(enableBtn(true));
    });
};

export const findMail = (email, navigate) => (dispatch) => {
  dispatch(enableBtn(false));
  dispatch(clearNotiAction(null));
  axios
    .post("/user/findmail", email)
    .then(() => {
      dispatch({
        type: Types.FIND_MAIL,
        payload: true,
      });
      navigate("/checkmsg");
      dispatch(enableBtn(true));
    })
    .catch((err) => {
      dispatch({
        type: Types.FIND_MAIL_ERROR,
        payload: false,
      });
      dispatch(enableBtn(true));
      dispatch(notiAction(err.response.data));
    });
};

export const recoverPass = (value, navigate, from) => (dispatch) => {
  dispatch(enableBtn(false));
  dispatch(clearNotiAction(null));
  if (value.password === value.confirmPassword) {
    axios
      .post("/user/recoverpass", value)
      .then((response) => {
        const decoded = jwtDecode(response.data.token);
        dispatch({
          type: Types.RECOVER_PASS,
          payload: {
            user: decoded,
          },
        });
        dispatch(enableBtn(true));
        setAuthToken(response.data.token);
        localStorage.setItem("token", response.data.token);
      })
      .catch((err) => {
        dispatch({
          type: Types.RECOVER_PASS_ERROR,
          payload: {
            error: err.response,
          },
        });
        dispatch(enableBtn(true));
        dispatch(notiAction(err.response.data));
      });
  } else {
    dispatch(
      notiAction({ notMatch: "New password and confirm password don't match" })
    );
    dispatch(enableBtn(true));
  }
};

export const isAuthenticate = () => (dispatch) => {
  const token = typeof window !== "undefined" && localStorage.getItem("token");
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
      typeof window !== "undefined" && localStorage.removeItem("token");
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
  typeof window !== "undefined" && localStorage.removeItem("token");
  setAuthToken("");
  navigate.push("/login");
};
