'use client';

import { ResponsiveContainer, PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';
import { useMemo } from 'react';

import { PALETTE } from '@/constants/chart';
import { TopCoffee } from '@/types/chart';

import ChartDataNone from '../ChartDataNone';
import ChartLoader from '../ChartLoader';

type Props = {
  isLoading: boolean;
  chartData?: TopCoffee[];
};

const DonutChart = ({ isLoading, chartData }: Props) => {
  const data = useMemo(() => chartData ?? [], [chartData]);

  const pieData = useMemo(
    () =>
      data.map((d) => ({
        brand: d.brand,
        popularity: d.popularity,
      })) as Array<Record<string, string | number>>,
    [data],
  );

  if (isLoading) return <ChartLoader />;
  if (pieData.length === 0) return <ChartDataNone />;

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Tooltip
          formatter={(value: number, name: string) => [`${value}%`, name]}
          labelFormatter={(label) => `브랜드: ${label}`}
        />
        <Legend verticalAlign="bottom" wrapperStyle={{ fontSize: 12 }} />
        <Pie
          data={pieData}
          dataKey="popularity"
          nameKey="brand"
          cx="50%"
          cy="45%"
          innerRadius={70}
          outerRadius={110}
          startAngle={90}
          endAngle={-270}
          labelLine={false}
          label={({ name, value }) => `${name} ${value}%`}
          isAnimationActive
        >
          {pieData.map((_, idx) => (
            <Cell key={`cell-${idx}`} fill={PALETTE[idx % PALETTE.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default DonutChart;
