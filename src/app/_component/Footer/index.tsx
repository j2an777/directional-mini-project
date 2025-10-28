import Text from '@/components/Text';

import * as S from './styles';

const Footer = () => {
  return (
    <S.Wrapper>
      <S.Block>
        <S.FooterContent>
          <Text color="white" textSize="p7" bold="semibold">
            주식회사 디렉셔널
          </Text>
          <Text color="white" textSize="p7" bold="regular">
            대표 : 이윤정
          </Text>
          <Text color="white" textSize="p7" bold="regular">
            사업자 등록번호 : 758-86-01081
          </Text>
          <Text color="white" textSize="p7" bold="regular">
            07327, 서울특별시 영등포구 여의나루로 53-1, 1103호(여의도동, 대오빌딩)
          </Text>
        </S.FooterContent>
        <S.FooterContent>
          <Text color="white" textSize="p7" bold="semibold">
            Contact
          </Text>
          <Text color="white" textSize="p7" bold="regular">
            help@directional.net
          </Text>
        </S.FooterContent>
      </S.Block>
    </S.Wrapper>
  );
};

export default Footer;
