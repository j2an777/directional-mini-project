'use client';

import {
  ResponsiveContainer,
  AreaChart as RCAreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
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

const AreaChart: React.FC<Props> = ({ isLoading, chartData = [], formatWeekLabel }) => {
  const data = useMemo(() => chartData ?? [], [chartData]);

  if (isLoading) return <ChartLoader />;
  if (!data.length) return <ChartDataNone />;

  return (
    <ResponsiveContainer width="100%" height={400}>
      <RCAreaChart data={data} stackOffset="expand">
        <defs>
          <linearGradient id="gHappy" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={COLORS.happy} stopOpacity={0.9} />
            <stop offset="100%" stopColor={COLORS.happy} stopOpacity={0.55} />
          </linearGradient>
          <linearGradient id="gTired" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={COLORS.tired} stopOpacity={0.9} />
            <stop offset="100%" stopColor={COLORS.tired} stopOpacity={0.55} />
          </linearGradient>
          <linearGradient id="gStressed" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={COLORS.stressed} stopOpacity={0.9} />
            <stop offset="100%" stopColor={COLORS.stressed} stopOpacity={0.55} />
          </linearGradient>
        </defs>

        <CartesianGrid strokeDasharray="3 3" vertical={false} />

        <XAxis
          dataKey="week"
          tickMargin={8}
          minTickGap={16}
          tick={{ fontSize: 12, fill: '#555' }}
          tickFormatter={(w: string) => (formatWeekLabel ? formatWeekLabel(w) : w.slice(5).replace('-', '/'))}
        />

        <YAxis
          domain={[0, 1]}
          tick={{ fontSize: 12, fill: '#555' }}
          tickFormatter={(v: number) => percentageChart(v, 'hundred')}
          width={40}
        />

        <Tooltip
          cursor={{ fill: 'rgba(0,0,0,0.04)' }}
          formatter={(value: number, name: string) => [percentageChart(value, 'hundred'), name]}
          labelFormatter={(label) => `Week: ${label}`}
        />

        <Legend verticalAlign="top" height={36} wrapperStyle={{ fontSize: 12 }} />

        <Area type="monotone" dataKey="happy" name="Happy" stackId="mood" stroke={COLORS.happy} fill="url(#gHappy)" />
        <Area type="monotone" dataKey="tired" name="Tired" stackId="mood" stroke={COLORS.tired} fill="url(#gTired)" />
        <Area
          type="monotone"
          dataKey="stressed"
          name="Stressed"
          stackId="mood"
          stroke={COLORS.stressed}
          fill="url(#gStressed)"
        />
      </RCAreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChart;
