'use client';

import { useRouter } from 'next/navigation';

import { deleteSession } from '@/utils/session/manageSession';
import Button from '@/components/Button';
import menuItems from '@/constants/menu';
import Text from '@/components/Text';
import Icon from '@/components/Icon';

import * as S from './styles';

const Navbar = ({ email }: { email: string }) => {
  const router = useRouter();

  const handleLogout = async () => {
    const res = await deleteSession();

    if (res) router.replace('/login');
  };

  return (
    <S.Wrapper>
      <S.LeftBlock>
        <S.LinkItem href="/">
          <Icon value="logo" size={50} />
          <Text textSize="p5" color="pink">
            디렉셔널
          </Text>
        </S.LinkItem>
        <S.MenuItem>
          {menuItems.map((menu) => (
            <S.LinkItem href={menu.url} key={menu.id}>
              <Text textSize="p7" className="linkText">
                {menu.name}
              </Text>
            </S.LinkItem>
          ))}
        </S.MenuItem>
      </S.LeftBlock>
      <S.RightBlock>
        <Text textSize="p8">안녕하세요! {email}님</Text>
        <Button btnContent="로그아웃" onClick={handleLogout} defaultType="pinkWhite" btnSize="buttonM" />
      </S.RightBlock>
    </S.Wrapper>
  );
};

export default Navbar;
