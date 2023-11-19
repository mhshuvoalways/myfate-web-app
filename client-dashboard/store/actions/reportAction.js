import * as Types from "../constants/reportTypes";
import axios from "../../utils/axios";

export const getReport = () => (dispatch) => {
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
