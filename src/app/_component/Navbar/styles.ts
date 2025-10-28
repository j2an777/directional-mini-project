'use client';

import styled from '@emotion/styled';

import { colors } from '@/styles/colorPalatte';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 70px;
  padding: 0px 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.white};
`;

const Block = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
`;

export { Wrapper, Block };
