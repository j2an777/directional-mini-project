'use client';

import styled from '@emotion/styled';

import { layoutMap } from './layoutMap';

const PageWrapper = styled.div`
  width: 100vw;
  padding: 30px 160px;
  ${layoutMap.centerColumn};
  gap: 24px;
`;

export default PageWrapper;
