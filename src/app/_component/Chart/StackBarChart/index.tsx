'use client';

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import React, { useMemo } from 'react';

import { percentageChart } from '@/utils/formatChart';
import { WeeklyMood } from '@/types/chart';
import { COLORS } from '@/constants/chart';

import ChartDataNone from '../ChartDataNone';
import ChartLoader from '../ChartLoader';

type Props = {
  isLoading: boolean;
  chartData?: WeeklyMood[];
  formatWeekLabel?: (week: string) => string;
};

const StackBarChart = ({ isLoading, chartData = [], formatWeekLabel }: Props) => {
  const data = useMemo(() => chartData ?? [], [chartData]);

  if (isLoading) return <ChartLoader />;
  if (!data.length) return <ChartDataNone />;

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} stackOffset="expand">
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="week"
          tickMargin={8}
          minTickGap={16}
          tick={{ fontSize: 12 }}
          tickFormatter={(w) =>
            formatWeekLabel ? formatWeekLabel(w as string) : (w as string).slice(5).replace('-', '/')
          }
        />
        <YAxis
          domain={[0, 1]}
          tickFormatter={(v) => percentageChart(v, 'hundred')}
          width={40}
          tick={{ fontSize: 12 }}
        />
        <Tooltip
          cursor={{ fill: 'rgba(0,0,0,0.04)' }}
          formatter={(value: number, name: string) => [percentageChart(value, 'normal'), name]}
          labelFormatter={(label) => `Week: ${label}`}
        />
        <Legend verticalAlign="top" height={36} fontSize={12} />

        <Bar dataKey="happy" stackId="mood" name="Happy" fill={COLORS.happy} />
        <Bar dataKey="tired" stackId="mood" name="Tired" fill={COLORS.tired} />
        <Bar dataKey="stressed" stackId="mood" name="Stressed" fill={COLORS.stressed} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StackBarChart;
