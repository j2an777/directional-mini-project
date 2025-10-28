import { css } from '@emotion/react';

export const layoutMap = {
  centerRow: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `,
  centerColumn: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  evenlyRow: css`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  `,
  betweenRow: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `,
  flexEndRow: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  `,
  absoluteCenter: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  fixedCenter: css`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
};
