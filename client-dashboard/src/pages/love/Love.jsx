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
import { getLoves } from "../../../store/actions/reportAction";
import "./love.scss";

const Home = () => {
  const [energyData, setEnergyData] = useState(null);
  const [moodData, setMoodData] = useState(null);
  const [focusData, setFocusData] = useState(null);
  const [spiritData, setSpiritData] = useState(null);

  const reportReducer = useSelector((store) => store.reportReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLoves());
  }, [dispatch]);

  useEffect(() => {
    const response = reportReducer.loves;
    if (response) {
      response.loveReport?.Connection.dailyData.forEach((el) => {
        const parsedDate = moment(el.date);
        const formattedDate = parsedDate.format("YYYY-MM-DD");
        if (moment(new Date()).format("YYYY-MM-DD") === formattedDate) {
          setEnergyData(el);
        }
      });
      response.loveReport?.Destiny.dailyData.forEach((el) => {
        const parsedDate = moment(el.date);
        const formattedDate = parsedDate.format("YYYY-MM-DD");
        if (moment(new Date()).format("YYYY-MM-DD") === formattedDate) {
          setMoodData(el);
        }
      });
      response.loveReport?.Intimacy.dailyData.forEach((el) => {
        const parsedDate = moment(el.date);
        const formattedDate = parsedDate.format("YYYY-MM-DD");
        if (moment(new Date()).format("YYYY-MM-DD") === formattedDate) {
          setFocusData(el);
        }
      });
      response.loveReport?.Romance.dailyData.forEach((el) => {
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
            chartData={energyData?.scores.map((el) => {
              return { score: el };
            })}
            color="#8884d8"
            icon="/userIcon.svg"
            title="Connection"
            dataKey="score"
            dailyContent={energyData?.dailyContent}
          />
        </div>
        <div className="box box3">
          <ChartBox
            percentage={moodData?.dailyAnnualdiff[0]}
            scoreEval={moodData?.scoreEval}
            chartData={moodData?.scores.map((el) => {
              return { score: el };
            })}
            color="skyblue"
            icon="/productIcon.svg"
            title="Destiny"
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
            chartData={focusData?.scores.map((el) => {
              return { score: el };
            })}
            color="gold"
            icon="/conversionIcon.svg"
            title="Intimacy"
            dataKey="score"
            dailyContent={focusData?.dailyContent}
          />
        </div>
        <div className="box box6">
          <ChartBox
            percentage={spiritData?.dailyAnnualdiff[0]}
            scoreEval={spiritData?.scoreEval}
            chartData={spiritData?.scores.map((el) => {
              return { score: el };
            })}
            color="teal"
            icon="/revenueIcon.svg"
            title="Romance"
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
