'use client';

import styled from '@emotion/styled';

import { colors } from '@/styles/colorPalatte';

const Wrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.96);
  border: 1px solid ${colors.white30};
  border-radius: 6px;
  padding: 8px;
  font-size: 12px;
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.08);
`;

const Block = styled.div`
  font-weight: 700;
  margin-bottom: 4px;
`;

const Title = styled.div`
  margin-bottom: 2px;
`;

const Box = styled.div``;

export { Wrapper, Block, Title, Box };
