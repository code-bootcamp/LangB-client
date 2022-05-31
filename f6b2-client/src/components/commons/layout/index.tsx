// import HeaderContainer from './header/header.container';
import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import LayoutHeader from './header';
import Home from '../../../../pages';

const WrapperLayout = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Body = styled.div`
  width: 1080px;
  height: auto;
`;

const BodyWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding-top: 60px;
  padding-bottom: 100px;
  background-color: white;
`;

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const BODY_YELLOW = ['/signin', '/signup', '/profile/[id]'];

  const HIDDEN_HEADER = ['/'];

  const isBodyColor = BODY_YELLOW.includes(router.pathname);
  const isHiddenHeader = HIDDEN_HEADER.includes(router.pathname);

  return (
    <WrapperLayout>
      {isHiddenHeader && <Home />}
      {!isHiddenHeader && (
        <>
          <LayoutHeader />
          <BodyWrapper
            style={{ backgroundColor: `${isBodyColor ? '#ffb950' : 'white'}` }}
          >
            <Body>{props.children}</Body>
          </BodyWrapper>
        </>
      )}
    </WrapperLayout>
  );
}
