import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

export const WrapperCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`;

export const Welcome = styled.div`
  width: 800px;
  height: 500px;
`;

export const ButtonMovetoSignin = styled.button`
  width: 200px;
  height: 60px;
  margin-top: 24px;
  border: none;
  font-size: 16px;
  padding: 12px 16px;
  color: #f8f9fa;
  background: #ffb950;
  border-radius: 10px;
  cursor: pointer;
`;

export default function SignUpComplete() {
  const router = useRouter();
  const likecontainer = useRef();

  useEffect(() => {
    lottie.loadAnimation({
      // @ts-ignore
      container: likecontainer.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: require('../../../public/lottie/signup.json'),
    });
  }, []);

  const onClickSignin = () => {
    router.push('/signin');
  };

  return (
    <WrapperCol>
      <Welcome
        // @ts-ignore
        ref={likecontainer}
      ></Welcome>
      <ButtonMovetoSignin onClick={onClickSignin}>Sign In</ButtonMovetoSignin>
    </WrapperCol>
  );
}
