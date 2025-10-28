'use client';

import styled from '@emotion/styled';
import React from 'react';

import { ButtonSize, buttonSizeMap, ButtonType, buttonTypeMap } from '@/styles/buttons';
import { layoutMap } from '@/styles/layoutMap';

type Props = {
  defaultType: ButtonType;
  btnSize?: ButtonSize;
  btnContent: string | React.ReactElement;
  txSize?: string;
  disable?: boolean;
  hoverType?: ButtonType;
  activeType?: ButtonType;
  className?: string;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button' | undefined;
  isLoading?: boolean;
};

type StyledProps = Omit<Props, 'btnContent'>;

const Loader = styled.div`
  width: 20px;
  aspect-ratio: 1;
  border-radius: 50%;
  animation: loading 1s infinite linear alternate;

  @keyframes loading {
    0% {
      box-shadow:
        25px 0 #fff,
        -25px 0 #f7a5bc;
      background: #fff;
    }
    33% {
      box-shadow:
        25px 0 #fff,
        -25px 0 #f7a5bc;
      background: #f7a5bc;
    }
    66% {
      box-shadow:
        25px 0 #f7a5bc,
        -25px 0 #fff;
      background: #f7a5bc;
    }
    100% {
      box-shadow:
        25px 0 #f7a5bc,
        -25px 0 #fff;
      background: #fff;
    }
  }
`;

const Wrapper = styled.button<StyledProps>`
  ${layoutMap.centerRow};
  ${({ disable, defaultType, activeType }) =>
    disable ? buttonTypeMap[activeType || defaultType] : buttonTypeMap[defaultType]};
  ${({ btnSize }) => (btnSize ? buttonSizeMap[btnSize] : buttonSizeMap['buttonDefault'])};
  transition: all 0.3s ease;
  ${({ disable }) => (disable ? 'cursor: pointer;' : null)};

  &:hover {
    ${({ hoverType, disable }) => disable && hoverType && buttonTypeMap[hoverType]};
  }

  &:active {
    ${({ disable }) => disable && 'transform: scale(0.95);'};
  }
`;

const Button = ({
  defaultType,
  btnSize,
  btnContent,
  txSize,
  disable = true,
  activeType,
  hoverType,
  className,
  type = 'button',
  onClick,
  isLoading = false,
}: Props) => {
  return (
    <Wrapper
      defaultType={defaultType}
      btnSize={btnSize}
      txSize={txSize}
      disable={disable || isLoading}
      activeType={activeType}
      onClick={onClick}
      disabled={!disable || isLoading}
      type={type}
      hoverType={hoverType}
      className={className}
    >
      {isLoading ? <Loader /> : btnContent}
    </Wrapper>
  );
};

export default Button;
