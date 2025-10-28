'use client';

import React, { HTMLAttributes } from 'react';

import { colors, Colors } from '@/styles/colorPalatte';

import LogoIcon from './LogoIcon';
import * as S from './styles';

export type IconValues = 'logo';

export interface IconProps extends HTMLAttributes<HTMLDivElement> {
  value: IconValues;
  size?: number;
  $reverse?: boolean;
  $active?: boolean;
  $rotate?: number;
  color?: Colors;
  opacity?: number;
  ref?: React.Ref<HTMLDivElement>;
}

const ICONS = {
  logo: LogoIcon,
} as const;

export type IconComponent = ({ color }: { color: string }) => React.ReactElement;

const Icon = ({ value, size, color = 'white', opacity = 1, $active = false, ref, ...props }: IconProps) => {
  return (
    <S.Wrapper ref={ref} size={size} color={color} opacity={opacity} $active={$active} {...props}>
      {renderIcon(value, color)}
    </S.Wrapper>
  );
};

const renderIcon = (value: IconValues, color: Colors) => {
  const IconComponent = ICONS[value] as IconComponent;
  if (!IconComponent) return null;
  return <IconComponent color={colors[color]} />;
};

export default Icon;
