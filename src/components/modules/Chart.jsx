import {
  LineChart,
  Line,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Chart({ data, metric }) {
  const metricText = {
    prices: "Prices",
    market_caps: "Market Caps",
    total_volumes: "Total Volumes",
  };
  
  return (
    <ResponsiveContainer width={700} height={300}>
      <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey={metric}
          name={metricText[metric]}
          stroke="#8884d8"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Chart;
