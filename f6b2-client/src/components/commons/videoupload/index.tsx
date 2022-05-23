import { useMutation } from '@apollo/client';
import { ChangeEvent, useRef, useState } from 'react';
import { checkFileValidation } from '../../../commons/libraries/validation';
import {
  IMutation,
  IMutationUploadFileArgs,
} from '../../../commons/types/generated/types';
import styled from '@emotion/styled';
import { UPLOAD_FILE } from '../queries';
import { BiCaretRightSquare } from 'react-icons/bi';
import * as S from '../../units/community/write/CommunityWrite.styles';

export const UploadVideoWrapper = styled.div`
  width: 30px;
  display: flex;
  flex-direction: column;
`;

export const UploadButton = styled.button`
  color: white;
  width: 100px;
  height: 100px;
  background: #bdbdbd;
`;

export default function VideoUpload(props: {
  onChangeVideoUrls: (fileUrl: string) => void;
  videoUrls: Array<string>;
  type: string;
}) {
  const fileRef = useRef<HTMLInputElement>(null);

  const [, setVideoUrl] = useState<string | undefined>('');
  const [uploadFile] = useMutation<
    Pick<IMutation, 'uploadFile'>,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    const isValid = checkFileValidation(file);
    if (!isValid) return;

    try {
      const { data: resultVideoUrl } = await uploadFile({
        variables: { files: [file] },
      });
      console.log('비디오', resultVideoUrl);

      setVideoUrl(resultVideoUrl?.uploadFile[3]);
      props.onChangeVideoUrls(String(resultVideoUrl?.uploadFile[3]));
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickVideo = () => {
    fileRef.current?.click();
  };

  return (
    <UploadVideoWrapper>
      {props.type === 'garden' && (
        <BiCaretRightSquare
          onClick={onClickVideo}
          size={'30'}
          color={'A4B1DA'}
        />
      )}
      {props.type === 'community' && (
        <S.ImgBtn>
          <S.BsFileEarmarkIcon />
        </S.ImgBtn>
      )}
      <input
        id='images'
        style={{ display: 'none' }}
        type='file'
        onChange={onChangeFile}
        ref={fileRef}
      />
    </UploadVideoWrapper>
  );
}