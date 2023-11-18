import { useEffect, useState } from "react";
import BarChartBox from "../../components/barChartBox/BarChartBox";
import BigChartBox from "../../components/bigChartBox/BigChartBox";
import ChartBox from "../../components/chartBox/ChartBox";
import PieChartBox from "../../components/pieCartBox/PieChartBox";
import TopBox from "../../components/topBox/TopBox";
import Timer from "../../components/timer";
import Form from "../../components/form";
import { barChartBoxRevenue, barChartBoxVisit } from "../../data";
import "./home.scss";
import moment from "moment";
import axios from "../../../utils/axios";

const Home = () => {
  const [energyData, setEnergyData] = useState(null);
  const [moodData, setMoodData] = useState(null);
  const [focusData, setFocusData] = useState(null);
  const [spiritData, setSpiritData] = useState(null);

  useEffect(() => {
    axios
      .get("/report/getreports")
      .then((res) => {
        res.data[0].dReport?.Energy.dailyData.forEach((el) => {
          const parsedDate = moment(el.date);
          const formattedDate = parsedDate.format("YYYY-MM-DD");
          if (moment(new Date()).format("YYYY-MM-DD") === formattedDate) {
            setEnergyData(el);
          }
        });
        res.data[0].dReport?.Mood.dailyData.forEach((el) => {
          const parsedDate = moment(el.date);
          const formattedDate = parsedDate.format("YYYY-MM-DD");
          if (moment(new Date()).format("YYYY-MM-DD") === formattedDate) {
            setMoodData(el);
          }
        });
        res.data[0].dReport?.Focus.dailyData.forEach((el) => {
          const parsedDate = moment(el.date);
          const formattedDate = parsedDate.format("YYYY-MM-DD");
          if (moment(new Date()).format("YYYY-MM-DD") === formattedDate) {
            setFocusData(el);
          }
        });
        res.data[0].dReport?.Spirit.dailyData.forEach((el) => {
          const parsedDate = moment(el.date);
          const formattedDate = parsedDate.format("YYYY-MM-DD");
          if (moment(new Date()).format("YYYY-MM-DD") === formattedDate) {
            setSpiritData(el);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="home">
        <div className="box box1">
          <TopBox />
        </div>
        <div className="box box2">
          <ChartBox
            percentage={energyData?.dailyAnnualdiff[0]}
            number={energyData?.averageScore}
            chartData={energyData?.scores.map((el) => {
              return { score: el };
            })}
            color="#8884d8"
            icon="/userIcon.svg"
            title="Energy"
            dataKey="score"
          />
        </div>
        <div className="box box3">
          <ChartBox
            percentage={moodData?.dailyAnnualdiff[0]}
            number={moodData?.averageScore}
            chartData={moodData?.scores.map((el) => {
              return { score: el };
            })}
            color="skyblue"
            icon="/productIcon.svg"
            title="Mood"
            dataKey="score"
          />
        </div>
        <div className="box box4">
          <PieChartBox />
        </div>
        <div className="box box5">
          <ChartBox
            percentage={focusData?.dailyAnnualdiff[0]}
            number={focusData?.averageScore}
            chartData={focusData?.scores.map((el) => {
              return { score: el };
            })}
            color="gold"
            icon="/conversionIcon.svg"
            title="Focus"
            dataKey="score"
          />
        </div>
        <div className="box box6">
          <ChartBox
            percentage={spiritData?.dailyAnnualdiff[0]}
            number={spiritData?.averageScore}
            chartData={spiritData?.scores.map((el) => {
              return { score: el };
            })}
            color="teal"
            icon="/revenueIcon.svg"
            title="Spirit"
            dataKey="score"
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
