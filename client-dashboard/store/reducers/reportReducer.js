import * as Types from "../constants/reportTypes";
import * as ClearDataTypes from "../constants/clearDataType";

const init = {
  dReports: null,
  error: null,
};

const reportReducer = (state = init, action) => {
  switch (action.type) {
    case Types.GET_REPORT: {
      return {
        ...state,
        dReports: action.payload,
      };
    }
    case Types.GET_REPORT_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case ClearDataTypes.CLEAR_DATA: {
      return {
        dReports: null,
        error: null,
      };
    }
    default:
      return state;
  }
};

export default reportReducer;
