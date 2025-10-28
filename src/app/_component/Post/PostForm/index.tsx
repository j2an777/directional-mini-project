'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import uploadPostSchema from '@/schema/post';
import TextArea from '@/components/TextArea';
import Input from '@/components/Input';
import Text from '@/components/Text';

import * as S from './styles';

const PostForm = () => {
  const schema = uploadPostSchema();

  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<UploadPost>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: '',
      body: '',
      category: 'FREE',
      tags: [],
    },
    mode: 'onChange',
    reValidateMode: 'onChange',
    shouldFocusError: true,
  });

  return (
    <S.FormWrapper>
      <S.Block>
        <Text>제목</Text>
        <Input name="title" control={control} phMessage="제목을 입력해주세요." />
      </S.Block>
      <S.Block>
        <Text>본문</Text>
        <TextArea name="body" control={control} phMessage="본문을 입력해주세요." />
      </S.Block>
    </S.FormWrapper>
  );
};

export default PostForm;
