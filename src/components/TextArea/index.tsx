'use client';

import { Control, Controller, FieldError, FieldErrorsImpl, Merge, UseFormRegisterReturn } from 'react-hook-form';
import { ChangeEvent, useState } from 'react';

import Text from '../Text';
import * as S from './styles';

type Props = {
  name: string;
  control: Control<any>;
  phMessage: string;
  htSize?: number;
  maxLength?: number;
  defaultValue?: string;
};

const TextArea = ({ name, control, phMessage, htSize, maxLength, defaultValue }: Props) => {
  return (
    <S.Wrapper>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field, fieldState }) => {
          const message = fieldState.error?.message || '';
          return (
            <>
              <S.Block>
                <S.FormTextArea
                  name={field.name}
                  value={field.value}
                  placeholder={phMessage}
                  onBlur={() => field.onBlur()}
                  htSize={htSize ?? htSize}
                  maxLength={maxLength}
                  onChange={field.onChange}
                />
                <h5>
                  {field.value.length}
                  {maxLength ? `/${maxLength}` : '/3000'}
                </h5>
              </S.Block>
              <S.ErrorMessage>
                {message !== '' && (
                  <Text textSize="p8" color="pink">
                    {message}
                  </Text>
                )}
              </S.ErrorMessage>
            </>
          );
        }}
      />
    </S.Wrapper>
  );
};

export default TextArea;
