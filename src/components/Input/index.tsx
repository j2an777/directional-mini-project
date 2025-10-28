import { Control, Controller } from 'react-hook-form';

import Text from '../Text';
import * as S from './styles';

type Props = {
  name: string;
  control: Control<any>;
  inputType?: 'text' | 'password' | 'email' | 'tel' | 'number';
  inputMode?: 'default' | 'login';
  phMessage?: string;
  readOnly?: boolean;
  autoComplete?: string;
  maxLength?: number;
  className?: string;
  defaultValue?: string | number;
};

const Input = ({
  name,
  control,
  inputType = 'text',
  inputMode = 'default',
  phMessage,
  readOnly = false,
  autoComplete = 'on',
  maxLength,
  className,
  defaultValue = '',
}: Props) => (
  <S.Wrapper className={className}>
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field, fieldState }) => {
        const message = fieldState.error?.message || '';
        return (
          <>
            <S.FormInput
              name={field.name}
              value={field.value ?? ''}
              onChange={field.onChange}
              onBlur={() => {
                field.onBlur();
              }}
              ref={field.ref}
              type={inputType}
              placeholder={phMessage}
              readOnly={readOnly}
              autoComplete={autoComplete}
              maxLength={maxLength}
              mode={inputMode}
              errorOn={!!message}
            />
            <S.ErrorMessage>
              {message !== '' && (
                <Text textSize="p10" color="black20">
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

export default Input;
