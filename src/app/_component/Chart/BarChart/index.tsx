'use client';

import {
  ResponsiveContainer,
  BarChart as RCBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  Cell,
} from 'recharts';
import React, { useMemo } from 'react';

import { formatPercentLabel } from '@/utils/formatChart';
import { PALETTE } from '@/constants/chart';
import { TopCoffee } from '@/types/chart';

import ChartDataNone from '../ChartDataNone';
import ChartLoader from '../ChartLoader';

type Props = {
  isLoading: boolean;
  chartData?: TopCoffee[];
};

const BarChart = ({ isLoading, chartData }: Props) => {
  const data = useMemo(() => chartData ?? [], [chartData]);

  if (isLoading) return <ChartLoader />;
  if (!data.length) return <ChartDataNone />;

  return (
    <ResponsiveContainer width="100%" height={400}>
      <RCBarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="brand" tick={{ fontSize: 12, fill: '#555' }} interval={0} tickMargin={8} />
        <YAxis
          domain={[0, 100]}
          tick={{ fontSize: 12, fill: '#555' }}
          tickFormatter={(v: number) => `${v}%`}
          width={40}
        />
        <Tooltip
          cursor={{ fill: 'rgba(0,0,0,0.04)' }}
          formatter={(value: number) => [`${value}%`, '인기도']}
          labelFormatter={(label) => `브랜드: ${label}`}
        />
        <Bar dataKey="popularity" name="인기도" radius={[6, 6, 0, 0]}>
          {data.map((_, idx) => (
            <Cell key={`cell-${idx}`} fill={PALETTE[idx % PALETTE.length]} />
          ))}
          <LabelList
            dataKey="popularity"
            position="top"
            formatter={formatPercentLabel}
            style={{ fontSize: 12, fill: '#444' }}
          />
        </Bar>
      </RCBarChart>
    </ResponsiveContainer>
  );
};

export default BarChart;
