import * as S from './CommunityDetail.styles';
import { getDate } from '../../../../commons/libraries/utils';
import { ICommunityDetailUIProps } from './CommunityDetail.types';
import { useRecoilState } from 'recoil';
import { userInfoState } from '../../../../commons/store';
import Dompurify from 'dompurify';
import { GiHearts } from 'react-icons/gi';
// 번역
import styled from '@emotion/styled';
import { useState } from 'react';
import TranslateCommunity from '../../../commons/translate/community';

export default function CommunityDetailUI(props: ICommunityDetailUIProps) {
  // // 번역
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
  const [, setIsTranslate] = useState(false);
  const onClickTranslate = () => {
    setIsTranslate((prev) => !prev);
  };

  // 로그인유저정보 가져오기
  const [userInfo] = useRecoilState(userInfoState);
  console.log('커뮤', props.data);
  return (
    <S.OutWrapper>
      <S.Wrapper>
        {/* 프사, 작성자, 작성일자 */}
        <S.Header>
          <S.Info onClick={props.onClickUser}>
            <S.UserImg
              src={
                props.data?.fetchCommunityBoard.writer.image.includes('http')
                  ? props.data?.fetchCommunityBoard.writer.image
                  : '/image/defaultuser.png'
              }
            />
            <S.Writer>{props.data?.fetchCommunityBoard?.writer.name}</S.Writer>
          </S.Info>
          <S.Date>{getDate(props.data?.fetchCommunityBoard?.createdAt)}</S.Date>
        </S.Header>

        {/* 컨텐츠 */}
        <S.Body>
          {/* 이미지 */}
          <S.InnerWrapper>
            <S.Img
              src={
                props.data?.fetchCommunityBoard?.image.includes('http')
                  ? props.data?.fetchCommunityBoard?.image
                  : '/community/default.png'
              }
            />

            {/* 좋아요 */}
            {props.isLike ? (
              <S.LikesWrapper onClick={props.onClickLike}>
                <S.IconWrapper>
                  <GiHearts style={{ color: '#FF5B5B' }} />
                </S.IconWrapper>
                <S.Likes>{props.data?.fetchCommunityBoard?.likes}</S.Likes>
              </S.LikesWrapper>
            ) : (
              <S.LikesWrapper onClick={props.onClickLike}>
                <S.IconWrapper>
                  <S.GiHeartsIcon />
                </S.IconWrapper>
                <S.Likes>{props.data?.fetchCommunityBoard?.likes}</S.Likes>
              </S.LikesWrapper>
            )}
          </S.InnerWrapper>
          <S.InnerWrapper>
            {/* 제목,내용 */}
            <S.Detail>
              <S.Title>{props.data?.fetchCommunityBoard?.title}</S.Title>
              {typeof window !== 'undefined' && (
                <S.Contents
                  dangerouslySetInnerHTML={{
                    __html: Dompurify.sanitize(
                      props.data?.fetchCommunityBoard?.content
                    ),
                  }}
                ></S.Contents>
              )}
              {/* 번역 컴포 불러오기 */}
              <TranslateCommunity
                content={props.data?.fetchCommunityBoard?.content}
              />
            </S.Detail>

            {/* 내 글 버튼 리스트 */}
            {props.data?.fetchCommunityBoard.writer.id === userInfo?.id && (
              <S.BtnWrapper>
                {/* 리스트로 */}
                <S.IconWrapper onClick={props.onClickMoveToList}>
                  <S.ListIcon />
                </S.IconWrapper>
                {/* 수정하기 */}
                <S.IconWrapper onClick={props.onClickMoveToEdit}>
                  <S.EditIcon />
                </S.IconWrapper>
                {/* 삭제하기 */}
                <S.IconWrapper onClick={props.onClickDelete}>
                  <S.DeleteIcon />
                </S.IconWrapper>
              </S.BtnWrapper>
            )}
            {/* 상대방 글 버튼리스트 */}
            {props.data?.fetchCommunityBoard.writer.id !== userInfo?.id && (
              <S.BtnWrapper>
                <S.IconWrapper onClick={props.onClickMoveToList}>
                  <S.ListIcon />
                </S.IconWrapper>
              </S.BtnWrapper>
            )}
          </S.InnerWrapper>
        </S.Body>
      </S.Wrapper>
    </S.OutWrapper>
  );
}
