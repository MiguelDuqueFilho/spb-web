import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import { ChartContainer, ChartTitle } from './styles';

export const Chart = ({ title, data, dataKey, grid }: any) => {
  return (
    <ChartContainer>
      <ChartTitle>{title}</ChartTitle>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#fff" />
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke="#888"
            strokeDasharray="3 4 5 2"
          />
          <Tooltip />
          {grid && <CartesianGrid stroke="#fff" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};
