import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../../commons/store";
import {
  DELETE_COMMENT,
  FETCH_COMMENTS,
  LIKE_COMMENT,
} from "../../../../commons/queries";
import GardenCommentListUI from "./GardenCommentList.presenter";
import { FETCH_MYLIKED_COMMENT } from "./GrdenCommentList.queries";

export default function GardenCommentList(props: any) {
  const [loginInfo] = useRecoilState(userInfoState);
  const { data: comments } = useQuery(FETCH_COMMENTS, {
    variables: {
      boardId: props.boardElId,
    },
  });

  const { data: myLike } = useQuery(FETCH_MYLIKED_COMMENT, {
    variables: {
      userId: loginInfo?.id,
    },
  });

  const [deleteComment] = useMutation(DELETE_COMMENT);


  const onClickDeleteComment = async (event: {
    currentTarget: { id: any };
  }) => {

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


  const commentEditBtn = (index: string | number) => (event: any) => {

    const newCommentEditVal = [...commentEditVal];
    // @ts-ignore
    newCommentEditVal[index] = !commentEditVal[index];
    setCommentEditVal(newCommentEditVal);
  };

  const [likeComment] = useMutation(LIKE_COMMENT);

  const onClickCommentLike = async (event: { currentTarget: { id: any } }) => {

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
    <GardenCommentListUI
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
