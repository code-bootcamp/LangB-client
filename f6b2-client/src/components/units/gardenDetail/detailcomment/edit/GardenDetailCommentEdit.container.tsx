import { useMutation } from '@apollo/client';
import { useState } from 'react';
import {
  CREATE_COMMENT,
  FETCH_COMMENTS,
  UPDATE_COMMENT,
} from '../../../../commons/queries';
import GardenDetailCommentEditUI from './GardenDetailCommentEdit.presenter';

export default function GardenDetailCommentEdit(props: any) {
  const [createComment] = useMutation(CREATE_COMMENT);
  const [updateComment] = useMutation(UPDATE_COMMENT);
  const [comment, setComment] = useState('');

  const onChangeComment = (event: any) => {
    setComment(event.target.value);
  };

  const [fileUrls, setFileUrls] = useState('');

  const onChangeFileUrls = (fileUrl: string) => {
    setFileUrls(fileUrl);
  };

  const [videoUrls, setVideoUrls] = useState('');
  const onChangeVideoUrls = (fileUrl: string) => {
    setVideoUrls(fileUrl);
  };

  const onClickCommentUpdate = async () => {
    const myVariables = {
      updateCommentInput: {},
      commentId: props.commentEl?.id,
    };

    if (comment !== '') {
      // @ts-ignore
      myVariables.updateCommentInput.content = comment;
    }

    if (fileUrls !== '') {
      // @ts-ignore
      myVariables.updateCommentInput.image = fileUrls;
    }

    if (videoUrls !== '') {
      // @ts-ignore
      myVariables.updateCommentInput.video = videoUrls;
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
      alert('댓글수정 성공!');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <GardenDetailCommentEditUI
      onChangeComment={onChangeComment}
      onClickCommentUpdate={onClickCommentUpdate}
      commentEl={props.commentEl}
      isEdit={props.isEdit}
      comment={comment}
      fileUrls={fileUrls}
      videoUrls={videoUrls}
      onChangeFileUrls={onChangeFileUrls}
      onChangeVideoUrls={onChangeVideoUrls}
    />
  );
}
