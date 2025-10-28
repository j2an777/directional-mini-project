import { css } from '@emotion/react';

export const breakPoints = {
  desktop: '1200px',
  tablet: '768px',
  mobile: '500px',
};

export const mediaQueries = {
  desktop: (styles: string) => css`
    @media (max-width: ${breakPoints.desktop}) {
      ${styles}
    }
  `,
  tablet: (styles: string) => css`
    @media (max-width: ${breakPoints.tablet}) {
      ${styles}
    }
  `,
  mobile: (styles: string) => css`
    @media (max-width: ${breakPoints.mobile}) {
      ${styles}
    }
  `,
};
