'use client';

import { useRouter } from 'next/navigation';

import PostFilterBar from '@/app/_component/Post/FilterBar';
import PostList from '@/app/_component/Post/PostList';
import Button from '@/components/Button';
import PageWrapper from '@/styles/page';

const PostPage = () => {
  const router = useRouter();

  const toUploadPost = () => router.push('/post/upload');
  return (
    <PageWrapper>
      <Button
        btnContent="게시글 업로드"
        defaultType="doublePink"
        hoverType="pinkWhite"
        btnSize="buttonM"
        onClick={toUploadPost}
      />
      <PostFilterBar />
      <PostList />
    </PageWrapper>
  );
};

export default PostPage;
