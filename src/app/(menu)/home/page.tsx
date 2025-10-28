'use client';

import { CoffeeConsumption, TopCoffee, WeeklyMood } from '@/types/chart';
import MultiLineChart from '@/app/_component/Chart/MultiLineChart';
import StackBarChart from '@/app/_component/Chart/StackBarChart';
import DonutChart from '@/app/_component/Chart/DonutChart';
import AreaChart from '@/app/_component/Chart/AreaChart';
import BarChart from '@/app/_component/Chart/BarChart';
import { useApiQuery } from '@/hooks/useQueries';
import PageWrapper from '@/styles/page';

import * as S from './styles';

const HomePage = () => {
  const { data, isLoading } = useApiQuery<WeeklyMood[]>(['weekly-mood-trend'], '/mock/weekly-mood-trend');
  const { data: coffeeData, isLoading: coffeeLoading } = useApiQuery<TopCoffee[]>(
    ['top-coffee-brands'],
    '/mock/top-coffee-brands',
  );
  const { data: cunsumptionData, isLoading: cunsumptionLoading } = useApiQuery<CoffeeConsumption>(
    ['coffee-cusumption'],
    '/mock/coffee-consumption',
  );

  return (
    <PageWrapper>
      <S.TwoColBlock>
        <S.ChartItem>
          <StackBarChart isLoading={isLoading} chartData={data} />
        </S.ChartItem>
        <S.ChartItem>
          <AreaChart isLoading={isLoading} chartData={data} />
        </S.ChartItem>
      </S.TwoColBlock>
      <S.TwoColBlock>
        <S.ChartItem>
          <BarChart isLoading={coffeeLoading} chartData={coffeeData} />
        </S.ChartItem>
        <S.ChartItem>
          <DonutChart isLoading={coffeeLoading} chartData={coffeeData} />
        </S.ChartItem>
      </S.TwoColBlock>
      <S.OneColBlock>
        <S.ChartItem>
          <MultiLineChart isLoading={cunsumptionLoading} chartData={cunsumptionData} />
        </S.ChartItem>
      </S.OneColBlock>
    </PageWrapper>
  );
};

export default HomePage;
