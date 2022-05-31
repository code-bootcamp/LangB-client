import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { accessTokenState, userInfoState } from '../../../../commons/store';
import { useMutation, useQuery } from '@apollo/client';
import { FETCH_USER_LOGGED_IN, LOG_OUT, USE_POINT } from '../../queries';
import { CgBee } from 'react-icons/cg';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import React, { useEffect } from 'react';
import { BsFlower1 } from 'react-icons/bs';

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #3a3939;
  position: fixed;
  z-index: 100;
  padding: 12px 0px;
`;

const WrapperHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 1200px;
  height: 100%;
`;

const WrapperLogo = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const LogoImg = styled.img`
  width: 74px;
  height: auto;
  cursor: pointer;
`;

const PLogoLang = styled.span`
  font-family: 'Istok Web';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 36px;
  color: #ffffff;
`;

const PLogoB = styled.span`
  font-family: 'Istok Web';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 36px;
  color: #ffb950;
`;

const WrapperHeaderMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 75%;
  height: 100%;
`;

const BtnHeader = styled.button`
  width: auto;
  height: 100%;
  border: none;
  color: white;
  background-color: #3a3939;
  font-family: 'Istok Web';
  margin: 0px 35px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #ffffff;

  :hover {
    color: #ffb950;
    cursor: pointer;
  }
`;

const MyBee = styled(CgBee)`
  font-size: 18px;
  text-align: center;
  color: #ffffff;
  :hover {
    color: #ffb950;
    cursor: pointer;
  }
`;

const MyPoint = styled(BsFlower1)`
  font-size: 18px;
  text-align: center;
  color: #ffffff;
  :hover {
    cursor: pointer;
    color: #ffb950;
  }
`;

const WrapperHeaderInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 100%;
  color: white;
  font-family: 'Istok Web';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
`;

const SpanPoint = styled.span`
  height: auto;
  font-family: 'Istok Web';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #ffffff;
`;

const SpanLogin = styled.span`
  font-family: 'Istok Web';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #ffffff;
  :hover {
    cursor: pointer;
  }
`;

const WrapperPoint = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  :hover {
    cursor: pointer;
    color: #ffb950;
  }
`;

const BoxWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function LayoutHeader() {
  const router = useRouter();
  const [isToken, setIsToken] = useRecoilState(accessTokenState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [userLogOut] = useMutation(LOG_OUT);
  const [usePoint] = useMutation(USE_POINT);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  useEffect(() => {
    setUserInfo(data?.fetchUser);
  }, [data]);

  const onClickLogo = () => {
    router.push('/');
  };

  const onClickChat = () => {
    router.push('/chat');
  };

  const onClickGarden = () => {
    router.push('/garden');
  };

  const onClickCommunity = () => {
    router.push('/community');
  };

  const onClickSignIn = () => {
    router.push('/signin');
  };

  const onClickCharge = () => {
    router.push('/charge');
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickLogOut = async () => {
    try {
      await userLogOut();
      handleClose();
      setIsToken('');
      router.push('/garden');
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickMoveMypage = () => {
    router.push(`/profile/${userInfo.id}`);
    handleClose();
  };

  return (
    <Wrapper>
      <WrapperHeader>
        <WrapperLogo onClick={onClickLogo}>
          <LogoImg src='/image/logowhite.png' />
        </WrapperLogo>
        <WrapperHeaderMenu>
          <BtnHeader onClick={onClickGarden}>Garden</BtnHeader>
          <BtnHeader onClick={onClickCommunity}>Community</BtnHeader>
          <BtnHeader onClick={onClickChat}>Chat</BtnHeader>
        </WrapperHeaderMenu>
        <WrapperHeaderInfo>
          {isToken ? (
            <>
              <MyBee
                style={{ margin: '5' }}
                // @ts-ignore
                onClick={handleMenu}
              />
              <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <MenuItem style={{ fontSize: '12px' }} onClick={onClickLogOut}>
                  Log Out
                </MenuItem>
                <MenuItem
                  style={{ fontSize: '12px' }}
                  onClick={onClickMoveMypage}
                >
                  MyPage
                </MenuItem>
              </Menu>
            </>
          ) : (
            <></>
          )}

          {isToken ? (
            <WrapperPoint>
              <MyPoint style={{ margin: '10' }} onClick={onClickCharge} />

              <SpanPoint>
                {data?.fetchUser.points.toLocaleString('ko-KR')} P
              </SpanPoint>
            </WrapperPoint>
          ) : (
            <>
              <SpanLogin onClick={onClickSignIn}>Login</SpanLogin>
            </>
          )}
        </WrapperHeaderInfo>
      </WrapperHeader>
    </Wrapper>
  );
}
