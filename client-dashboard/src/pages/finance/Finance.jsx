import { useEffect, useState } from "react";
import BarChartBox from "../../components/barChartBox/BarChartBox";
import BigChartBox from "../../components/bigChartBox/BigChartBox";
import ChartBox from "../../components/chartBox/ChartBox";
import PieChartBox from "../../components/pieCartBox/PieChartBox";
import TopBox from "../../components/topBox/TopBox";
import Timer from "../../components/timer";
import Form from "../../components/form";
import { barChartBoxRevenue, barChartBoxVisit } from "../../data";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getFinance } from "../../../store/actions/reportAction";
import "./finance.scss";

const Home = () => {
  const [energyData, setEnergyData] = useState(null);
  const [moodData, setMoodData] = useState(null);
  const [focusData, setFocusData] = useState(null);
  const [spiritData, setSpiritData] = useState(null);

  const reportReducer = useSelector((store) => store.reportReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFinance());
  }, [dispatch]);

  useEffect(() => {
    const response = reportReducer.finances;
    if (response) {
      response.financeReport?.Consistency.dailyData.forEach((el) => {
        const parsedDate = moment(el.date);
        const formattedDate = parsedDate.format("YYYY-MM-DD");
        if (moment(new Date()).format("YYYY-MM-DD") === formattedDate) {
          setEnergyData(el);
        }
      });
      response.financeReport?.Decision.dailyData.forEach((el) => {
        const parsedDate = moment(el.date);
        const formattedDate = parsedDate.format("YYYY-MM-DD");
        if (moment(new Date()).format("YYYY-MM-DD") === formattedDate) {
          setMoodData(el);
        }
      });
      response.financeReport?.Execution.dailyData.forEach((el) => {
        const parsedDate = moment(el.date);
        const formattedDate = parsedDate.format("YYYY-MM-DD");
        if (moment(new Date()).format("YYYY-MM-DD") === formattedDate) {
          setFocusData(el);
        }
      });
      response.financeReport?.Insight.dailyData.forEach((el) => {
        const parsedDate = moment(el.date);
        const formattedDate = parsedDate.format("YYYY-MM-DD");
        if (moment(new Date()).format("YYYY-MM-DD") === formattedDate) {
          setSpiritData(el);
        }
      });
    }
  }, [reportReducer]);

  return (
    <div>
      <div className="home">
        <div className="box box1">
          <TopBox />
        </div>
        <div className="box box2">
          <ChartBox
            percentage={energyData?.dailyAnnualdiff[0]}
            scoreEval={energyData?.scoreEval}
            chartData={energyData?.scores.map((el) => el)}
            color="#8884d8"
            icon="/userIcon.svg"
            title="Consistency"
            dataKey="score"
            dailyContent={energyData?.dailyContent}
          />
        </div>
        <div className="box box3">
          <ChartBox
            percentage={moodData?.dailyAnnualdiff[0]}
            scoreEval={moodData?.scoreEval}
            chartData={energyData?.scores.map((el) => el)}
            color="skyblue"
            icon="/productIcon.svg"
            title="Decision"
            dataKey="score"
            dailyContent={moodData?.dailyContent}
          />
        </div>
        <div className="box box4">
          <PieChartBox />
        </div>
        <div className="box box5">
          <ChartBox
            percentage={focusData?.dailyAnnualdiff[0]}
            scoreEval={focusData?.scoreEval}
            chartData={energyData?.scores.map((el) => el)}
            color="gold"
            icon="/conversionIcon.svg"
            title="Execution"
            dataKey="score"
            dailyContent={focusData?.dailyContent}
          />
        </div>
        <div className="box box6">
          <ChartBox
            percentage={spiritData?.dailyAnnualdiff[0]}
            scoreEval={spiritData?.scoreEval}
            chartData={spiritData?.scores.map((el) => el)}
            color="teal"
            icon="/revenueIcon.svg"
            title="Insight"
            dataKey="score"
            dailyContent={spiritData?.dailyContent}
          />
        </div>
        <div className="box box7">
          <BigChartBox />
        </div>
        <div className="box box8">
          <BarChartBox {...barChartBoxVisit} />
        </div>
        <div className="box box9">
          <BarChartBox {...barChartBoxRevenue} />
        </div>
      </div>
      <div className="home-timer-form">
        <Timer />
        <Form />
      </div>
    </div>
  );
};

export default Home;
