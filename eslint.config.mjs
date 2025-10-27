import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
  },
  {
    rules: {
      // TypeScript 관련 규칙 완화
      '@typescript-eslint/no-explicit-any': 'warn', // any 타입 사용 시 경고만 표시
      '@typescript-eslint/no-unused-vars': 'warn', // 사용하지 않는 변수 경고만 표시
      '@typescript-eslint/no-non-null-assertion': 'warn', // non-null assertion 경고만 표시

      // 개발 편의를 위한 규칙 완화
      'prefer-const': 'warn',
      // "no-console": "warn", // console.log 사용 시 경고만 표시
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];

export default eslintConfig;
