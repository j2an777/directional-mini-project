'use client';

import styled from '@emotion/styled';
import Link from 'next/link';

import { colors } from '@/styles/colorPalatte';
import { layoutMap } from '@/styles/layoutMap';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 70px;
  padding: 0px 160px;
  ${layoutMap.betweenRow};
  background-color: ${colors.white};
  z-index: 999;
`;

const LeftBlock = styled.div`
  ${layoutMap.flexStartRow};
  gap: 36px;
`;

const RightBlock = styled.div`
  ${layoutMap.flexEndRow};
  gap: 12px;
`;

const MenuItem = styled.div`
  ${layoutMap.flexStartRow};
  gap: 16px;
`;

const LinkItem = styled(Link)`
  ${layoutMap.flexStartRow};
  gap: 4px;
  text-decoration: none;

  &:hover {
    .linkText {
      color: ${colors.pink};
    }
  }
`;

export { Wrapper, LeftBlock, RightBlock, MenuItem, LinkItem };
