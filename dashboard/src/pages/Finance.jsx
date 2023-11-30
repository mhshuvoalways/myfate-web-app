import { useState, useEffect } from "react";
import moment from "moment";
import Sidebar from "../components/sidebar";
import CalendarCompo from "../components/dReport";
import { useDispatch, useSelector } from "react-redux";
import { getFinance } from "../../store/actions/reportAction";

const Calendar = () => {
  const [selectSubItems, setSelectSubItems] = useState(null);
  const [selectSubItemValue, setSelectSubItemValue] = useState("Insight");
  const [data, setData] = useState(null);

  const reportReducer = useSelector((store) => store.reportReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFinance());
  }, [dispatch]);

  const response = reportReducer.finances;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getSub = (sub) => {
    if (response) {
      const subItem = response.financeReport?.[sub].dailyData;
      subItem.forEach((el) => {
        const parsedDate = moment(el.date);
        const formattedDate = parsedDate.format("YYYY-MM-DD");
        if (moment(new Date()).format("YYYY-MM-DD") === formattedDate) {
          setData(el);
        }
      });
    }
  };

  useEffect(() => {
    getSub(selectSubItemValue);
  }, [getSub, selectSubItemValue]);

  useEffect(() => {
    if (response) {
      setSelectSubItems(response.financeReport);
    }
  }, [response]);

  return (
    <Sidebar>
      <CalendarCompo
        selectSubItemValue={selectSubItemValue}
        setSelectSubItemValue={setSelectSubItemValue}
        selectSubItems={selectSubItems}
        data={data}
      />
    </Sidebar>
  );
};

export default Calendar;
