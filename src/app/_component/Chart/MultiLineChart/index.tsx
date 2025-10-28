'use client';

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Fragment, useMemo } from 'react';

import { normalizeToWide } from '@/utils/formatChart';
import { CoffeeConsumption } from '@/types/chart';
import { TEAM_COLORS } from '@/constants/chart';

import ChartDataNone from '../ChartDataNone';
import CustomTooltip from './CustomTooltip';
import ChartLoader from '../ChartLoader';

type Props = { isLoading: boolean; chartData?: CoffeeConsumption };

const SquareDot = (props: any) => {
  const { cx, cy, stroke, fill } = props;
  const c = fill ?? stroke ?? '#888';
  return <rect x={cx - 3} y={cy - 3} width={6} height={6} rx={1} fill={c} stroke="none" />;
};

const MultiLineChart = ({ isLoading, chartData }: Props) => {
  const { wide, teams } = useMemo(() => normalizeToWide(chartData), [chartData]);

  const colorByTeam = useMemo(() => {
    const m = new Map<string, string>();
    teams.forEach((t, i) => m.set(t, TEAM_COLORS[i % TEAM_COLORS.length]));
    return m;
  }, [teams]);

  if (isLoading) return <ChartLoader />;
  if (!wide.length) return <ChartDataNone />;

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={wide}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="cups"
          tick={{ fontSize: 12, fill: '#555' }}
          tickMargin={8}
          label={{ value: '커피(잔/일)', position: 'insideBottom', dy: 10, fontSize: 12, fill: '#666' }}
        />
        <YAxis
          yAxisId="left"
          tick={{ fontSize: 12, fill: '#555' }}
          width={40}
          label={{ value: '버그 수', angle: -90, position: 'insideLeft', dx: -6, fontSize: 12, fill: '#666' }}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          tick={{ fontSize: 12, fill: '#555' }}
          width={40}
          label={{ value: '생산성', angle: 90, position: 'insideRight', dx: 6, fontSize: 12, fill: '#666' }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend verticalAlign="top" height={36} wrapperStyle={{ fontSize: 12 }} />

        {teams.map((team) => {
          const color = colorByTeam.get(team)!;
          return (
            <Fragment key={team}>
              <Line
                key={`${team}-bugs`}
                type="monotone"
                dataKey={`${team}.bugs`}
                name={`${team} - Bugs`}
                yAxisId="left"
                stroke={color}
                strokeWidth={2}
                dot={{ r: 3, stroke: color, fill: color }}
                activeDot={{ r: 4 }}
              />
              <Line
                key={`${team}-productivity`}
                type="monotone"
                dataKey={`${team}.productivity`}
                name={`${team} - Productivity`}
                yAxisId="right"
                stroke={color}
                strokeDasharray="5 4"
                strokeWidth={2}
                dot={<SquareDot />}
                activeDot={<SquareDot />}
              />
            </Fragment>
          );
        })}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MultiLineChart;
