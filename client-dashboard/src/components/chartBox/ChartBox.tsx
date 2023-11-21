import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

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
    <>
      <div className="flex gap-2 items-center justify-between">
        <img src={props.icon} alt="" />
        <span>{props.title}</span>
      </div>
      <div className="w-full h-40">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart data={props.chartData}>
            <Tooltip
              contentStyle={{ background: "#384256", border: "none" }}
              position={{ x: 0, y: 80 }}
            />
            <XAxis dataKey="time" className="hidden" />
            <Line
              type="monotone"
              dataKey="score"
              stroke={props.color}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-between items-end">
        <div>
          <p
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
          </p>
          <small>This month</small>
        </div>
        <div>
          <h1 style={{ color: props.color }} className="text-end">
            {props.scoreEval}
          </h1>
          <small className="text-end">Score Eval</small>
        </div>
      </div>
      <p className="mt-5 text-xs text-gray-200">{props.dailyContent}</p>
    </>
  );
};

export default ChartBox;
