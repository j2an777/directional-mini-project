'use client';

import { ComponentProps } from 'react';

import styled from '@emotion/styled';
import { css } from '@emotion/react';

import Icon from '.';

type IconProps = ComponentProps<typeof Icon>;

type IconContainerProps = Omit<IconProps, 'value'>;

export const Wrapper = styled.div<IconContainerProps>`
  width: ${({ size }) => (size ? `${size}px` : 'fit-content')};
  height: ${({ size }) => (size ? `${size}px` : 'fit-content')};
  svg {
    width: 100%;
    height: 100%;
  }
  opacity: ${({ opacity }) => (opacity ? opacity : 1)};
  transition: all 0.3s ease;
  transform: ${({ $rotate, $reverse }) =>
    `${$rotate ? `rotate(${$rotate}deg)` : 'rotate(0deg)'} ${$reverse ? 'scaleY(-1)' : ''}`};
  ${({ $active }) =>
    $active
      ? css`
          &:hover {
            opacity: 1;
            cursor: pointer;
          }
          &:active {
            transform: scale(0.95);
          }
        `
      : null};
`;
