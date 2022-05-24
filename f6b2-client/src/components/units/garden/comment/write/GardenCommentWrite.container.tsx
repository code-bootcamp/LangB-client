import { useMutation } from "@apollo/client";
import { useState } from "react";
import {
  CREATE_COMMENT,
  FETCH_COMMENTS,
  UPDATE_COMMENT,
} from "../../../../commons/queries";
import GardenCommentWriteUI from "./GardenCommentWrite.presenter";

export default function GardenCommentWrite(props: any) {
  const [createComment] = useMutation(CREATE_COMMENT);
  const [updateComment] = useMutation(UPDATE_COMMENT);
  const [comment, setComment] = useState("");

  const onChangeComment = (event: any) => {
    setComment(event.target.value);
  };

  const onClickCommentWrite = async () => {
    try {
      await createComment({
        variables: {
          createCommentInput: {
            content: comment,
            image: fileUrls[0],
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
        ],
      });
      alert("댓글작성성공!");
      setComment("");
      setFileUrls([]);
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
      alert("댓글수정 성공!");
      setComment("");
    } catch (error) {
      alert(error);
    }
  };

  // 1. 이미지 URL을 받기 위한 set 선언
  const [fileUrls, setFileUrls] = useState([]);

  // 2. 업로드 컴포넌트에 넘겨줄 콜백 함수(?)
  const onChangeFileUrls = (fileUrl: string) => {
    const newFileUrls = [...fileUrls];
    newFileUrls.push(fileUrl);
    setFileUrls(newFileUrls);
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
    />
  );
}
