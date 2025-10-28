import { z } from 'zod';

import { CATEGORY_VALUES, forbiddenWords } from '@/constants/post';

export const CategoryEnum = z.enum(CATEGORY_VALUES);

const containsForbiddenWord = (text: string) => {
  return forbiddenWords.some((word) => text.includes(word));
};

const uploadPostSchema = () =>
  z.object({
    title: z
      .string()
      .min(1, '제목을 입력하세요.')
      .max(80, '제목은 최대 80자까지 가능합니다.')
      .refine((value) => !containsForbiddenWord(value), {
        message: '금칙어가 포함되어 있습니다.',
      }),
    body: z
      .string()
      .min(30, '본문은 최소 30자 이상이어야 합니다.')
      .max(2000, '본문은 최대 2000자까지 가능합니다.')
      .refine((value) => !containsForbiddenWord(value), {
        message: '금칙어가 포함되어 있습니다.',
      }),
    category: CategoryEnum,
    tags: z
      .array(z.string().min(1, '태그는 비어 있을 수 없습니다.'))
      .max(5, '태그는 최대 5개까지만 가능합니다.')
      .optional(),
  });

export default uploadPostSchema;
