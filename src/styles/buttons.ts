import { css } from '@emotion/react';

import { colors } from './colorPalatte';

export const buttonTypeMap = {
  doublePink: css`
    box-shadow: none;
    border: 1px solid ${colors.pink20};
    background-color: transparent;
    outline: none;
    color: ${colors.pink};
  `,
  pinkWhite: css`
    box-shadow: none;
    border: none;
    background-color: ${colors.pink};
    outline: none;
    color: ${colors.white};
  `,
};

export const buttonSizeMap = {
  buttonDefault: css`
    width: 100%;
    padding: 18px 0;
    box-sizing: border-box;
    border-radius: 10px;
    font-size: 20px;
  `,
  buttonModalDefault: css`
    width: 100%;
    padding: 10px 0;
    box-sizing: border-box;
    border-radius: 10px;
    font-size: 14px;
  `,
};

export type ButtonType = keyof typeof buttonTypeMap;
export type ButtonSize = keyof typeof buttonSizeMap;
