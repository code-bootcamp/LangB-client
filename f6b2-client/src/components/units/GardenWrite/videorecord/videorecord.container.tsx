import { useState } from 'react';
import VideoRecordUI from './videorecord.presenter';
import { v4 as uuidv4 } from 'uuid';
import { IGardenWriteVideo } from '../GardenWrite.type';

export default function VideoRecord(props: IGardenWriteVideo) {
  const [recordUrls, setRecordUrls] = useState([]);

  const onRecordingComplete = (videoBlob: Blob) => {
    const file = new File([videoBlob], `${uuidv4()}.webm`);
    // @ts-ignore
    setRecordUrls(file);
  };

  return (
    <VideoRecordUI
      recordUrls={recordUrls}
      onRecordingComplete={onRecordingComplete}
      onChangeVideoUrls={props.onChangeVideoUrls}
      handleClose={props.handleClose}
    />
  );
}
