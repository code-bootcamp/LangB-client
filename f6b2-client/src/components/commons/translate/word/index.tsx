import styled from '@emotion/styled';
import { useState } from 'react';
import { Translate, Translator } from 'react-auto-translate';
import { useRecoilState } from 'recoil';
import { getLangCode } from '../../../../commons/libraries/utils';
import { userInfoState } from '../../../../commons/store';

export default function TranslateWord(props: any) {
  const [userInfo] = useRecoilState(userInfoState);

  const Wrapper = styled.div``;

  const Button = styled.div`
    color: #767676;
    font-size: 9px;
    border: none;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
    margin-top: 5px;
  `;
  const TranslateBox = styled.div`
    color: #767676;
    margin-top: 5px;
  `;
  const [isTranslate, setIsTranslate] = useState(false);
  const onClickTranslate = () => {
    setIsTranslate((prev) => !prev);
  };

  return (
    <Wrapper>
      <Translator
        googleApiKey='AIzaSyBwuUqwo_UbRpvYykdibLlA_luu47IXG5M'
        from='en'
        to={getLangCode(userInfo?.myLang)}
      >
        <Button onClick={onClickTranslate}>번역보기</Button>
        {isTranslate === true && (
          <TranslateBox>
            <Translate>{props.word}</Translate>
          </TranslateBox>
        )}
      </Translator>
    </Wrapper>
  );
}
