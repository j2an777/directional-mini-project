'use client';

import styled from '@emotion/styled';

import { mediaQueries } from '@/styles/breakPoints';
import { colors } from '@/styles/colorPalatte';

const Wrapper = styled.div`
  background-color: ${colors.black20};
  width: 100vw;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 160px;

  ${mediaQueries.desktop(`
    padding: 30px;
  `)}
`;

const Block = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  ${mediaQueries.desktop(`
    flex-direction: column;
    gap: 20px;
  `)}
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export { Wrapper, Block, FooterContent };
