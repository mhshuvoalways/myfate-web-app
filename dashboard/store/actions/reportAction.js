import * as Types from "../constants/reportTypes";
import axios from "../../utils/axios";

export const getdReport = () => (dispatch) => {
  axios
    .get("/report/getreports")
    .then((response) => {
      dispatch({
        type: Types.GET_REPORT,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.GET_REPORT_ERROR,
        payload: err.response?.data,
      });
    });
};

export const getLoves = () => (dispatch) => {
  axios
    .get("/love/getloves")
    .then((response) => {
      dispatch({
        type: Types.GET_LOVE,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.GET_LOVE_ERROR,
        payload: err.response?.data,
      });
    });
};

export const getFinance = () => (dispatch) => {
  axios
    .get("/finance/getfinances")
    .then((response) => {
      dispatch({
        type: Types.GET_FINANCE,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.GET_FINANCE_ERROR,
        payload: err.response?.data,
      });
    });
};
