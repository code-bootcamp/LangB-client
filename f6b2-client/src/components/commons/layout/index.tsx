// import HeaderContainer from './header/header.container';
import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import LayoutHeader from './header';


const WrapperLayout = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  width: 100%;
  height: auto;
`;

const BodyWrapper = styled.div`
  display: flex;
`;

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();



  const HIDDEN_HEADER = [
    // 헤더 숨길 페이지 
    // '/boards/post/[postid]',
    // '/boards/new',
    // '/boards/post/[postid]/edit',
  ];

  const isHiddenHeader = HIDDEN_HEADER.includes(router.pathname)

  return (
    <WrapperLayout>
      {!isHiddenHeader && <LayoutHeader />}
      <BodyWrapper>
        <Body>{props.children}</Body>
      </BodyWrapper>
    </WrapperLayout>
  )
}