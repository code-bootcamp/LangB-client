import { useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { userInfoState } from '../../../../../commons/store';
import {
  DELETE_COMMENT,
  FETCH_COMMENTS,
  FETCH_SAVED_BOARDS,
  LIKE_COMMENT,
} from '../../../../commons/queries';
import { FETCH_MYLIKED_COMMENT } from '../../../garden/comment/list/GrdenCommentList.queries';
import GardenDetailCommentListUI from './GardenDetailCommentList.presenter';

export default function GardenDetailCommentList(props: any) {
  const [loginUserInfo] = useRecoilState(userInfoState);
  const { data: comments } = useQuery(FETCH_COMMENTS, {
    variables: {
      boardId: props.boardElId,
    },
  });

  const { data: myLike } = useQuery(FETCH_MYLIKED_COMMENT, {
    variables: {
      userId: loginUserInfo?.id,
    },
  });
  const [deleteComment] = useMutation(DELETE_COMMENT);
  const [loginInfo] = useRecoilState(userInfoState);

  const onClickDeleteComment = async (event: any) => {
    try {
      await deleteComment({
        variables: {
          commentId: event.currentTarget.id,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: {
              boardId: props.boardElId,
            },
          },
        ],
      });
    } catch (error) {
      alert(error);
    }
  };

  const [commentEditVal, setCommentEditVal] = useState([false]);
  // 댓글수정버튼 클릭 시, 수정창이 보인다

  const commentEditBtn = (index: any) => (event: any) => {
    const newCommentEditVal = [...commentEditVal];
    newCommentEditVal[index] = !commentEditVal[index];
    setCommentEditVal(newCommentEditVal);
  };

  // 댓글 좋아요
  const [likeComment] = useMutation(LIKE_COMMENT);
  const onClickCommentLike = async (event: any) => {
    try {
      await likeComment({
        variables: {
          commentId: event.currentTarget.id,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: {
              boardId: props.boardElId,
            },
          },
          {
            query: FETCH_MYLIKED_COMMENT,
            variables: {
              userId: loginInfo?.id,
            },
          },
        ],
      });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <GardenDetailCommentListUI
      boardElId={props.boardElId}
      comments={comments}
      onClickDeleteComment={onClickDeleteComment}
      commentEditBtn={commentEditBtn}
      commentEditVal={commentEditVal}
      loginInfo={loginInfo}
      onClickCommentLike={onClickCommentLike}
      myLike={myLike}
    />
  );
}
