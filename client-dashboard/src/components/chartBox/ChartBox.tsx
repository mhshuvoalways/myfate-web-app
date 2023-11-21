import { Link } from "react-router-dom";
import "./chartBox.scss";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

type Props = {
  color: string;
  icon: string;
  title: string;
  scoreEval: string;
  percentage: string;
  chartData: object[];
  dailyContent: string;
};

const ChartBox = (props: Props) => {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <img src={props.icon} alt="" />
          <span>{props.title}</span>
        </div>
        <h1>{props.scoreEval}</h1>
        <Link to="/" style={{ color: props.color }}>
          View all
        </Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "#384256", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 0, y: 80 }}
              />
              <Line
                type="monotone"
                dataKey="time"
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="period"
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <small className="py-12 text-end">{props.dailyContent}</small>
        <div className="texts">
          <span
            className="percentage"
            style={{
              color: Number(props.percentage) < 0 ? "tomato" : "limegreen",
            }}
          >
            {props.percentage &&
              (Number(props.percentage) < 0
                ? "0%"
                : `${props.percentage.toString().slice(2, 4)}.${
                    props.percentage.length === 5
                      ? props.percentage.toString().slice(4)
                      : 0
                  }%`)}
          </span>
          <span className="duration">This month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
