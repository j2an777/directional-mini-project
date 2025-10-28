import getSession from '@/lib/session';

import Navbar from '../_component/Navbar';
import Block from './styles';

const MenuLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getSession();

  return (
    <>
      <Navbar email={session.user.email} />
      <Block>{children}</Block>
    </>
  );
};

export default MenuLayout;
