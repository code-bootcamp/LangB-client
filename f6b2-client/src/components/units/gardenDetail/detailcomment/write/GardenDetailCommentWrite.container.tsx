import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { userInfoState } from '../../../../../commons/store';
import {
  CREATE_COMMENT,
  FETCH_COMMENTS,
  UPDATE_COMMENT,
} from '../../../../commons/queries';
import GardenDetailCommentWriteUI from './GardenDetailCommentWrite.presenter';

export default function GardenCommentWrite(props: any) {
  const [loginUserInfo] = useRecoilState(userInfoState);
  const [createComment] = useMutation(CREATE_COMMENT);
  const [updateComment] = useMutation(UPDATE_COMMENT);
  const [comment, setComment] = useState('');
  const router = useRouter();

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
          boardId: router.query.boardId,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: {
              boardId: router.query.boardId,
            },
          },
        ],
      });

      setComment('');
      setFileUrls('');
      setVideoUrls('');
    } catch (error) {
      alert(error);
    }
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
      setComment('');
    } catch (error) {
      alert(error);
    }
  };

  const [fileUrls, setFileUrls] = useState('');

  const onChangeFileUrls = (fileUrl: string) => {
    setFileUrls(fileUrl);
  };

  const [videoUrls, setVideoUrls] = useState('');
  const onChangeVideoUrls = (fileUrl: string) => {
    setVideoUrls(fileUrl);
  };

  return (
    <GardenDetailCommentWriteUI
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
      loginUserInfo={loginUserInfo}
    />
  );
}
