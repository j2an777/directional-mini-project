import { css } from '@emotion/react';

export const colorPalatte = css`
  :root {
    --white: #fff;
    --black: #000;
    --black20: #282828;
    --gray10: #dedede;
    --pink: #f23d67;
    --pink20: #f8d4dd;
  }
`;

export const colors = {
  white: 'var(--white)',
  black: 'var(--black)',
  black20: 'var(--black20)',
  gray10: 'var(--gray10)',
  pink: 'var(--pink)',
  pink20: 'var(--pink20)',
};

export type Colors = keyof typeof colors;
