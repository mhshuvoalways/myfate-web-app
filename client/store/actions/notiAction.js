import * as Types from "../constants/alertTypes";

const notiAction = (msg) => (dispatch) => {
  dispatch({
    type: Types.ALERT_TYPE,
    payload: {
      msg,
    },
  });
};

const clearNotiAction = () => (dispatch) => {
  dispatch({
    type: Types.CLEAR_ALERT_TYPE,
  });
};

export { notiAction, clearNotiAction };
