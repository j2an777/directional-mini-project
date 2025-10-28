import { z } from 'zod';

const getLoginSchema = () =>
  z.object({
    email: z.string().min(1, '이메일을 입력하세요.').email('이메일 형식이 올바르지 않습니다.'),
    password: z
      .string()
      .min(7, '비밀번호는 최소 7자 이상이어야 합니다.')
      .max(20, '비밀번호는 최대 20자까지 가능합니다.'),
  });

export default getLoginSchema;
