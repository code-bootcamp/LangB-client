import { useMutation, useQuery } from '@apollo/client';
import { ChangeEvent, useState } from 'react';
import {
  CREATE_BOARD,
  FETCH_USER_LOGGED_IN,
  FETCH_BOARDS,
} from '../../commons/queries';

import { CREATE_BOARD_IMAGE } from './GardenWrite.queries';
import GardenWriteUI from './GardenWrite.presenter';
import { useRouter } from 'next/router';
import { accessTokenState } from '../../../commons/store';
import { useRecoilState } from 'recoil';

export default function GardenWriteContainer() {
  const router = useRouter();
  const [isToken] = useRecoilState(accessTokenState);
  const [isContent, setIsContent] = useState('');
  const [fileUrls, setFileUrls] = useState([]);
  const [videoUrls, setVideoUrls] = useState('');

  const [createGarden] = useMutation(CREATE_BOARD);
  const [createImage] = useMutation(CREATE_BOARD_IMAGE);

  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setIsContent(event.target.value);
  };

  const onChangeFileUrls = (fileUrl: string) => {
    const newFileUrls = [...fileUrls];
    // @ts-ignore
    newFileUrls.push(fileUrl);
    setFileUrls(newFileUrls);
  };

  const onClickImageDelete = (index: number) => () => {
    const newFileUrls = [...fileUrls];
    newFileUrls.splice(index, 1);
    setFileUrls(newFileUrls);
  };

  const onChangeVideoUrls = (fileUrl: string) => {
    setVideoUrls(fileUrl);
  };

  const onClickVideoDelete = () => {
    setVideoUrls('');
  };

  const onClickSave = async () => {
    if (isContent === '') {
      alert('Please Enter your words');
      return;
    }

    try {
      const { data: resultCreateBoard } = await createGarden({
        variables: {
          createBoardInput: {
            content: String(isContent),
            video: videoUrls,
          },
        },
      });

      const { data: imageResult } = await createImage({
        variables: {
          image: fileUrls,
          board: resultCreateBoard.createBoard.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARDS,
          },
        ],
      });
      setIsContent('');
      setFileUrls([]);
      setVideoUrls('');
      router.push(`/garden/${resultCreateBoard.createBoard.id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickLogin = () => {
    router.push(`/signin`);
  };

  return (
    <GardenWriteUI
      onClickLogin={onClickLogin}
      isToken={isToken}
      onChangeContents={onChangeContents}
      onClickSave={onClickSave}
      data={data}
      isContent={isContent}
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
      onChangeVideoUrls={onChangeVideoUrls}
      videoUrls={videoUrls}
      open={open}
      handleOpen={handleOpen}
      handleClose={handleClose}
      onClickImageDelete={onClickImageDelete}
      onClickVideoDelete={onClickVideoDelete}
    />
  );
}
