import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  YAxis,
  XAxis,
} from "recharts";

const index = ({ data }) => {
  return (
    <div className="h-80 w-full bg-white shadow rounded-xl p-5">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={300} height={100} data={data?.scores}>
          <Line
            type="monotone"
            dataKey="score"
            stroke="#8884d8"
            strokeWidth={2}
          />
          <Tooltip />
          <YAxis dataKey="score" />
          <XAxis dataKey="time" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default index;
