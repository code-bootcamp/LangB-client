import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../../commons/store";
import {
  CREATE_COMMENT,
  FETCH_BOARDS,
  FETCH_COMMENTS,
  UPDATE_COMMENT,
} from "../../../../commons/queries";
import GardenCommentWriteUI from "./GardenCommentWrite.presenter";

export default function GardenCommentWrite(props: any) {
  const [createComment] = useMutation(CREATE_COMMENT);
  const [updateComment] = useMutation(UPDATE_COMMENT);
  const [comment, setComment] = useState("");
  const [loginInfo] = useRecoilState(userInfoState);

  const onChangeComment = (event: any) => {
    setComment(event.target.value);
  };

  const onClickCommentWrite = async () => {
    try {
      await createComment({
        variables: {
          createCommentInput: {
            content: comment,
            image: fileUrls,
            video: videoUrls,
          },
          boardId: props.boardId,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: {
              boardId: props.boardId,
            },
          },
          {
            query: FETCH_BOARDS,
            variables: {
              pageSize: 5,
              page: 1,
              myLang: loginInfo?.newLang,
            },
          },
        ],
      });
      setComment("");
      setFileUrls("");
      setVideoUrls("");
    } catch (error) {
      alert(error);
    }
  };

  const onClickCommentUpdate = async () => {
    const myVariables = {
      updateCommentInput: {},
      commentId: props.commentEl?.id,
    };

    if (comment !== "") {
      //  @ts-ignore
      myVariables.updateCommentInput.content = comment;
    }

    try {
      await updateComment({
        variables: myVariables,
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: {
              boardId: props.boardElId,
            },
          },
        ],
      });
      setComment("");
    } catch (error) {
      alert(error);
    }
  };

  const [fileUrls, setFileUrls] = useState("");
  const onChangeFileUrls = (fileUrl: string) => {
    setFileUrls(fileUrl);
  };

  const [videoUrls, setVideoUrls] = useState("");
  const onChangeVideoUrls = (fileUrl: string) => {
    setVideoUrls(fileUrl);
  };

  return (
    <GardenCommentWriteUI
      onChangeComment={onChangeComment}
      onClickCommentWrite={onClickCommentWrite}
      onClickCommentUpdate={onClickCommentUpdate}
      commentEl={props.commentEl}
      isEdit={props.isEdit}
      comment={comment}
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
      onChangeVideoUrls={onChangeVideoUrls}
      videoUrls={videoUrls}
      loginInfo={loginInfo}
    />
  );
}
