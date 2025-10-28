'use client';

import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { bolderMap, BoldType, typographyMap, TypoType } from '@/styles/fonts';
import { colors, Colors } from '@/styles/colorPalatte';

export interface TextProps {
  textSize?: TypoType;
  bold?: BoldType;
  color?: Colors;
  ellipsis?: number;
  clickable?: boolean;
}

const Text = styled.p<TextProps>`
  ${({ textSize = 'p3' }) => typographyMap[textSize]};
  ${({ bold = 'semibold' }) => bolderMap[bold]};
  color: ${({ color = 'black' }) => colors[color]};
  line-height: normal;
  ${({ ellipsis = false }) =>
    ellipsis &&
    css`
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      width: ${ellipsis}px;
    `}
  ${({ clickable = false }) =>
    clickable
      ? css`
          cursor: pointer;
        `
      : null};
`;

export default Text;
