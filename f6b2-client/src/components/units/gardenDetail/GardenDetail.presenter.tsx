import * as S from './GardenDetail.styles';
import { getDate } from '../../../commons/libraries/utils';

import { useRecoilState } from 'recoil';
import { userInfoState } from '../../../commons/store';
import GardenDetailImg from './detailImg/gardenDetailImg.container';
import GardenDetailCommentList from './detailcomment/list/GardenDetailCommentList.container';
import GardenDetailCommentWrite from './detailcomment/write/GardenDetailCommentWrite.container';
import TranslateGarden from '../../commons/translate/garden';
import DropdownIcon from './dropDown';

import { useQuery } from '@apollo/client';
import { FETCH_SAVED_BOARDS } from '../../commons/queries';

export default function GardenDetailUI(props: any) {
  const [loginInfo] = useRecoilState(userInfoState);
  const { data: savedInfo } = useQuery(FETCH_SAVED_BOARDS, {
    variables: {
      userId: loginInfo?.id,
    },
  });

  return (
    <S.Outer>
      <S.GardenWrapper>
        <S.Wrapper>
          <S.GardenListBox key={props.data?.fetchBoard.id}>
            <S.ContentsImg>
              <GardenDetailImg
                boardId={props.data?.fetchBoard.id}
                video={props.data?.fetchBoard.video}
              />
            </S.ContentsImg>

            <S.RightWrapper>
              <S.WriterInfoBox>
                <S.WriterInfo>
                  <S.WriterProfile
                    src={
                      props.data?.fetchBoard?.writer.image.includes('http')
                        ? props.data?.fetchBoard?.writer.image
                        : '/image/defaultuser.png'
                    }
                  />
                  <S.WriterName>
                    {props.data?.fetchBoard.writer.name}
                  </S.WriterName>
                  <S.CreatedAt>
                    {getDate(props.data?.fetchBoard.createdAt)}
                  </S.CreatedAt>
                </S.WriterInfo>

                {props.data?.fetchBoard.writer.id === loginInfo?.id && (
                  <DropdownIcon />
                )}
                {props.data?.fetchBoard.writer.id !== loginInfo?.id && ''}
              </S.WriterInfoBox>

              <S.ContentsBox>
                <S.Contents>{props.data?.fetchBoard.content}</S.Contents>
                <S.ContentsTranslateBox>
                  <TranslateGarden
                    content={props.data?.fetchBoard.content}
                    myLang={props.data?.fetchBoard.writer.myLang}
                  />
                </S.ContentsTranslateBox>

                <S.LikeAndCommentCountBox>
                  <S.LikeAndCommentCount>
                    <S.CommentCount>
                      <S.CommentIcon />

                      {props.data?.fetchBoard.commentsCount}
                    </S.CommentCount>

                    {props.savedInfo?.fetchSavedBoards.filter(
                      (element: any) =>
                        element.board.id === props.data?.fetchBoard.id
                    ).length > 0 ? (
                      props.savedInfo?.fetchSavedBoards.map((element2: any) =>
                        element2.board.id === props.data?.fetchBoard.id ? (
                          element2.isLiked ? (
                            <S.Like
                              onClick={props.onClickLikeBoard}
                              id={props.data?.fetchBoard.id}
                            >
                              <S.LikeOn /> {props.data?.fetchBoard.likes}
                            </S.Like>
                          ) : (
                            <S.Like
                              onClick={props.onClickLikeBoard}
                              id={props.data?.fetchBoard.id}
                            >
                              <S.LikeOff /> {props.data?.fetchBoard.likes}
                            </S.Like>
                          )
                        ) : (
                          ''
                        )
                      )
                    ) : (
                      <S.Like
                        onClick={props.onClickLikeBoard}
                        id={props.data?.fetchBoard.id}
                      >
                        <S.LikeOff /> {props.data?.fetchBoard.likes}
                      </S.Like>
                    )}
                  </S.LikeAndCommentCount>
                </S.LikeAndCommentCountBox>
                <S.CommentBox>
                  <GardenDetailCommentList
                    boardElId={props.boardElId}
                    loginInfo={loginInfo}
                  />
                </S.CommentBox>
                <GardenDetailCommentWrite />
              </S.ContentsBox>
            </S.RightWrapper>
          </S.GardenListBox>
        </S.Wrapper>
      </S.GardenWrapper>
    </S.Outer>
  );
}
