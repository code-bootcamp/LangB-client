import styled from '@emotion/styled';

export const WrapperCol = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const WrapperDiv = styled.div`
  width: 100%;
  height: 450px;
`;

export const WrapperRow = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

import VideoRecorder from 'react-video-recorder';
import VideoUpload from '../../../commons/videoupload';
export default function VideoRecordUI(props: any) {
  return (
    <>
      <WrapperCol>
        <WrapperDiv>
          <VideoRecorder
            constraints={{
              audio: true,
              video: true,
            }}
            isFlipped={false}
            onRecordingComplete={props.onRecordingComplete}
          />
        </WrapperDiv>
        <WrapperRow>
          <VideoUpload
            type={'record'}
            recordUrls={props.recordUrls}
            onChangeVideoUrls={props.onChangeVideoUrls}
            handleClose={props.handleClose}
          />
        </WrapperRow>
      </WrapperCol>
    </>
  );
}
