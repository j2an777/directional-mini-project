'use client';

import styled from '@emotion/styled';

import { colors } from '@/styles/colorPalatte';
import { TypoType } from '@/styles/fonts';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  flex: 1.5;
  position: relative;
`;

type FormInputProps = {
  errorOn: boolean;
  mode: 'default' | 'login';
  txSize?: TypoType;
};

const FormInput = styled.input<FormInputProps>`
  width: 100%;
  padding: 12px 14px;
  box-sizing: border-box;
  border-radius: 10px;
  outline: none;
  background-color: transparent;
  color: ${colors.black20};
  border: 1px solid ${({ errorOn }) => (errorOn ? colors.pink : colors.gray10)};
`;

const ErrorMessage = styled.div`
  width: 100%;
  height: 6px;
`;

export { Wrapper, FormInput, ErrorMessage };
