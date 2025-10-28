'use client';

import styled from '@emotion/styled';

import { layoutMap } from '@/styles/layoutMap';
import { colors } from '@/styles/colorPalatte';

const OneColBlock = styled.div`
  width: 100%;
  height: 100%;
  max-height: 500px;
  ${layoutMap.centerRow};
`;

const TwoColBlock = styled.div`
  ${layoutMap.centerRow};
  gap: 24px;
  width: 100%;
  height: 100%;
  max-height: 500px;
`;

const ChartItem = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  border: 1px solid ${colors.gray10};
  border-radius: 10px;
`;

export { TwoColBlock, ChartItem, OneColBlock };
