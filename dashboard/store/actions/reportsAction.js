import * as Types from "../constants/reportsTypes";
import axios from "../../utils/axios";

export const getreports = () => (dispatch) => {
  axios
    .get("/reports/getreports")
    .then((res) => {
      dispatch({
        type: Types.GET_REPORTS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.GET_REPORTS_ERROR,
        payload: err.response?.data,
      });
    });
};
