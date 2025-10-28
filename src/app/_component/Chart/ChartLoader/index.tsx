'use client';

import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  width: 100%;
  height: 400px;
`;

const ChartLoader = () => {
  return (
    <Wrapper>
      <Skeleton width="100%" height="100%" borderRadius={10} />
    </Wrapper>
  );
};

export default ChartLoader;
