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

export default function PaymentComplete() {
  const router = useRouter();
  const paycontainer = useRef();
  useEffect(() => {
    lottie.loadAnimation({
      // @ts-ignore
      container: paycontainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../../public/lottie/pay1.json'),
    });
  }, []);

  const onClickComplete = () => {
    router.push('/garden');
  };

  return (
    <WrapperCol>
      <Welcome
        // @ts-ignore
        ref={paycontainer}
      ></Welcome>
      <ButtonMovetoSignin onClick={onClickComplete}>
        COMPLETE
      </ButtonMovetoSignin>
    </WrapperCol>
  );
}
