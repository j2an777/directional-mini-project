'use client';

import styled from '@emotion/styled';

import Text from '@/components/Text';

const Wrapper = styled.div`
  height: 400px;
  display: grid;
  place-items: center;
`;

const ChartDataNone = () => {
  return (
    <Wrapper>
      <Text textSize="p6">데이터가 없습니다.</Text>
    </Wrapper>
  );
};

export default ChartDataNone;
