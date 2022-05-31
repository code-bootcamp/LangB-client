import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { userInfoState } from '../../../commons/store';
import { FETCH_USER_LOGGED_IN } from '../SingnIn/signin.query';
import ChargeStationUI from './charge.presenter';
import { BUY_POINT } from './charge.queries';

declare const window: typeof globalThis & {
  IMP: any;
};

export default function ChargeStation() {
  const [userInfo] = useRecoilState(userInfoState);
  const [isSelect, setIsSelect] = useState(0);
  const [buyPoint] = useMutation(BUY_POINT);
  const [isClicked, setIsClicked] = useState<any>({
    btn1: false,
    btn2: false,
    btn3: false,
    btn4: false,
    btn5: false,
  });
  const router = useRouter();

  const onClickButton =
    (btnName: string) => (event: { target: { innerText: string } }) => {
      const point = Number(
        event.target.innerText.replace('P', '').replace(',', '')
      );
      setIsSelect(point);
      setIsClicked({
        btn1: false,
        btn2: false,
        btn3: false,
        btn4: false,
        btn5: false,
        [btnName]: true,
      });
    };

  useEffect(() => {
    const jqueryScript = document.createElement('script');
    jqueryScript.src = 'https://code.jquery.com/jquery-1.12.4.min.js';
    document.head.appendChild(jqueryScript);

    const iamportScript = document.createElement('script');
    iamportScript.src = 'https://cdn.iamport.kr/js/iamport.payment-1.2.0.js';
    document.head.appendChild(iamportScript);
  }, []);

  const requestPay = () => {
    const IMP = window.IMP;
    IMP.init('imp13990733');
    IMP.request_pay(
      {
        pg: 'html5_inicis',
        pay_method: 'card',
        name: 'LagnB Point',
        amount: isSelect * 10,
        buyer_email: userInfo.email,
        buyer_name: userInfo.name,
        buyer_tel: '010-0000-0000',
        buyer_addr: '',
        buyer_postcode: '',
      },
      async (rsp: any) => {
        console.log(rsp);
        if (rsp.success) {
          const response = await buyPoint({
            variables: {
              impUid: rsp.imp_uid,
              price: isSelect * 10,
            },
            refetchQueries: [
              {
                query: FETCH_USER_LOGGED_IN,
              },
            ],
          });
          router.push('/charge/thanks');
        } else {
          alert('결제에 실패했습니다. 다시 시도해 주세요');
        }
      }
    );
  };

  return (
    <ChargeStationUI
      userInfo={userInfo}
      onClickButton={onClickButton}
      isSelect={isSelect}
      requestPay={requestPay}
      isClicked={isClicked}
    />
  );
}
