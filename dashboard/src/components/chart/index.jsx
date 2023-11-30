import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  YAxis,
  XAxis,
} from "recharts";

const data = [
  {
    time: 8,
    score: 30,
  },
  {
    time: 11,
    score: 20,
  },
  {
    time: 14,
    score: 80,
  },
  {
    time: 17,
    score: 84,
  },
  {
    time: 20,
    score: 80,
  },
  {
    time: 23,
    score: 100,
  },
  {
    time: 2,
    score: 80,
  },
];

const index = () => {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={300} height={100} data={data}>
          <Line
            type="monotone"
            dataKey="score"
            stroke="#8884d8"
            strokeWidth={2}
          />
          <Tooltip />
          <YAxis />
          <XAxis dataKey="time" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default index;
