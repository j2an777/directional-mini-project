'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { updateSession } from '@/utils/session/manageSession';
import { useApiMutation } from '@/hooks/useQueries';
import getLoginSchema from '@/schema/login';
import { UserContent } from '@/types/user';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Text from '@/components/Text';
import Icon from '@/components/Icon';

import * as S from './styles';

interface FormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const schema = getLoginSchema();
  const router = useRouter();
  const { mutateAsync, isPending } = useApiMutation<UserContent, FormValues>('/auth/login');

  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
    reValidateMode: 'onChange',
    shouldFocusError: true,
  });

  const handleLogin = async (data: FormValues) => {
    try {
      const res = await mutateAsync(data);

      if (res.token) {
        const update = await updateSession({
          token: res.token,
          user: res.user,
        });

        if (update) router.replace('/home');
      }
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  return (
    <S.Wrapper>
      <S.FormContainer onSubmit={handleSubmit(handleLogin)}>
        <S.LoginTitle>
          <Icon value="logo" size={100} />
          <Text color="pink" textSize="p1">
            디렉셔널
          </Text>
        </S.LoginTitle>
        <Input name="email" control={control} phMessage="이메일을 입력해주세요." />
        <Input name="password" control={control} phMessage="비밀번호를 입력해주세요." />
        <Button
          btnContent="로그인"
          type="submit"
          defaultType="disable"
          activeType="pinkWhite"
          className="loginBtn"
          disable={isValid}
          isLoading={isPending}
        />
      </S.FormContainer>
    </S.Wrapper>
  );
};

export default LoginForm;
