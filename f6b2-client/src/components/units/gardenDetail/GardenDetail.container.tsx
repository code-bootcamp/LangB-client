import { useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import GardenListUI from './GardenDetail.presenter';
import { FETCH_BOARD } from './GardenDetail.queries';
import { FETCH_SAVED_BOARDS, SAVE_BOARD } from '../../commons/queries';
import { IBoard } from '../../../commons/types/generated/types';
import { LIKE_BOARD } from './GardenDetail.queries';
import { useRouter } from 'next/router';
import { userInfoState } from '../../../commons/store';
import { useRecoilState } from 'recoil';

export default function GardenDetail() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });
  const [loginInfo] = useRecoilState(userInfoState);

  const { data: savedInfo } = useQuery(FETCH_SAVED_BOARDS, {
    variables: {
      userId: loginInfo?.id,
    },
  });

  const [saveGarden] = useMutation(SAVE_BOARD);
  const [likeBoard] = useMutation(LIKE_BOARD);

  const [commentListVal, setCommentListVal] = useState([false]);
  // 댓글 펼치기
  const onClickCommentListBtn = (index: any) => (event: any) => {
    const newCommentOpen = [...commentListVal];
    newCommentOpen[index] = !commentListVal[index];
    setCommentListVal(newCommentOpen);
  };

  // 좋아요 클릭
  const onClickLikeBoard = async (event: any) => {
    try {
      await likeBoard({
        variables: {
          boardId: event.currentTarget.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: {
              boardId: event.currentTarget.id,
            },
          },
          {
            query: FETCH_SAVED_BOARDS,
            variables: {
              userId: loginInfo.id,
            },
          },
        ],
      });
    } catch (error) {
      alert(error);
    }
  };

  // 저장하기 버튼 클릭 함수
  const onClickSaved = async (data: IBoard) => {
    try {
      const result = await saveGarden({
        variables: {
          boardId: data.id,
          userId: data.writer.id,
        },
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <GardenListUI
      commentListVal={commentListVal}
      onClickCommentListBtn={onClickCommentListBtn}
      data={data}
      onClickSaved={onClickSaved}
      onClickLikeBoard={onClickLikeBoard}
      boardElId={router.query.boardId}
      savedInfo={savedInfo}
    />
  );
}
