import styled from '@emotion/styled';

import { colors } from '../../styles/colorPalatte';
import { typographyMap } from '../../styles/fonts';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  flex: 1.5;
  position: relative;
`;

const Block = styled.div`
  position: relative;
  width: 100%;
  height: auto;

  h5 {
    position: absolute;
    bottom: 16px;
    right: 16px;
    ${typographyMap.p8};
    color: ${colors.black20};
  }
`;

type FormTextAreaProps = {
  htSize?: number;
};

const FormTextArea = styled.textarea<FormTextAreaProps>`
  width: 100%;
  height: ${({ htSize }) => (htSize ? `${htSize}px` : '327px')};
  border: 1px solid ${colors.gray10};
  padding: 16px;
  box-sizing: border-box;
  overflow-y: auto;
  color: ${colors.black20};
  border-radius: 10px;
  outline: none;
  ${typographyMap.p8};
  resize: none;
  background-color: transparent;
`;

const ErrorMessage = styled.div`
  width: 100%;
  height: 6px;
`;

export { Wrapper, Block, FormTextArea, ErrorMessage };
