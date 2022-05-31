import { useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Translate, Translator } from 'react-auto-translate';
import { useRecoilState } from 'recoil';
import { getLangCode } from '../../../../commons/libraries/utils';
import { userInfoState } from '../../../../commons/store';
import { FETCH_COMMUNITY_BOARD } from '../../queries';

export default function TranslateCommunity(props: any) {
  const [userInfo] = useRecoilState(userInfoState);
  const router = useRouter();
  const { data: commuData } = useQuery(FETCH_COMMUNITY_BOARD, {
    variables: { communityBoardId: router.query.communityBoardId },
  });

  const Wrapper = styled.div``;
  // 번역버튼
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
        from={getLangCode(commuData?.fetchCommunityBoard.writer.myLang)} // 작성자 mylang
        to={getLangCode(userInfo?.myLang)} // 로그인유저 mylang
      >
        <Button onClick={onClickTranslate}>번역보기</Button>
        {isTranslate === true && (
          <TranslateBox>
            <Translate>{props.content}</Translate>
          </TranslateBox>
        )}
      </Translator>
    </Wrapper>
  );
}
