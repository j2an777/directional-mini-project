'use client';

import { Global } from '@emotion/react';

import globalStyle from '@/styles/globalStyle';

const GlobalStyleProvider = () => <Global styles={globalStyle} />;

export default GlobalStyleProvider;
