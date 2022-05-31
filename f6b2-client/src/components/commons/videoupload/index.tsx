import { useMutation } from '@apollo/client';
import { ChangeEvent, useRef, useState } from 'react';
import { checkFileValidation } from '../../../commons/libraries/validation';
import {
  IMutation,
  IMutationUploadFileArgs,
} from '../../../commons/types/generated/types';
import styled from '@emotion/styled';
import { UPLOAD_FILE } from '../queries';
import { ImFileVideo } from 'react-icons/im';

export const UploadVideoWrapper = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
`;

export const UploadButton = styled.button`
  color: white;
  width: 100px;
  height: 100px;
  background: #bdbdbd;
`;

export const RecordSaveButton = styled.button`
  width: 200px;
  height: 30px;
  background: #ffb950;
  border: none;
  border-radius: 10px;
  color: white;
  margin: 0px;
  cursor: pointer;
`;

export const GardenVideoUpload = styled(ImFileVideo)`
  font-size: 15px;
  color: #ffb950;
  :hover {
    cursor: pointer;
  }
`;

export default function VideoUpload(props: {
  onChangeVideoUrls?: (fileUrl: string) => void;
  videoUrls?: Array<string>;
  type?: string;
  recordUrls?: Array<string>;
  handleClose?: () => void;
}) {
  const fileRef = useRef<HTMLInputElement>(null);

  const [videoUrl, setVideoUrl] = useState<string | undefined>('');
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

      setVideoUrl(resultVideoUrl?.uploadFile[3]);
      if (props.onChangeVideoUrls)
        props.onChangeVideoUrls(String(resultVideoUrl?.uploadFile[3]));
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickVideo = () => {
    fileRef.current?.click();
  };

  // record
  const onClickRecordUpload = async () => {
    try {
      const { data: resultVideoUrl } = await uploadFile({
        variables: { files: [props.recordUrls] },
      });

      setVideoUrl(resultVideoUrl?.uploadFile[3]);
      if (props.onChangeVideoUrls)
        props.onChangeVideoUrls(String(resultVideoUrl?.uploadFile[3]));
      // @ts-ignore
      props.handleClose();
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <>
      <UploadVideoWrapper>
        {props.type === 'garden' && (
          <GardenVideoUpload onClick={onClickVideo} />
        )}
        {props.type === 'comment' && (
          <ImFileVideo onClick={onClickVideo} size={'15'} />
        )}

        <input
          id='images'
          style={{ display: 'none' }}
          type='file'
          onChange={onChangeFile}
          ref={fileRef}
        />
      </UploadVideoWrapper>
      {props.type === 'record' && (
        <RecordSaveButton onClick={onClickRecordUpload}>
          저장하기
        </RecordSaveButton>
      )}
    </>
  );
}
