'use client';

import * as S from './styles';

const CustomTooltip = ({ active, label, payload }: any) => {
  if (!active || !payload?.length) return null;
  const hovered = payload.find((p: any) => p?.dataKey);
  const team = hovered?.dataKey?.split('.')?.[0];

  const bugs = payload.find((p: any) => p?.dataKey === `${team}.bugs`)?.value;
  const prod = payload.find((p: any) => p?.dataKey === `${team}.productivity`)?.value;

  return (
    <S.Wrapper>
      <S.Block style={{ fontWeight: 700, marginBottom: 4 }}>{`커피: ${label}잔/일`}</S.Block>
      <S.Title style={{ marginBottom: 2 }}>
        팀: <b>{team}</b>
      </S.Title>
      <S.Box>
        버그 수: <b>{bugs ?? '-'}</b>
      </S.Box>
      <S.Box>
        생산성: <b>{prod ?? '-'}</b>
      </S.Box>
    </S.Wrapper>
  );
};

export default CustomTooltip;
