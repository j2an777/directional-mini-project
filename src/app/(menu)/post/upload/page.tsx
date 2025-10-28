import PostForm from '@/app/_component/Post/PostForm';
import getSession from '@/lib/session';
import PageWrapper from '@/styles/page';

const UploadPage = () => {
  const session = getSession();

  return (
    <PageWrapper>
      <PostForm />
    </PageWrapper>
  );
};

export default UploadPage;
