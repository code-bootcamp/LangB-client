import {
  CommentWriteBox,
  CommentWriteBtn,
  CommentWriteInput,
  CommentWriteInputBox,
  CommentWriteProfile,
  ImageThumbnail,
  ImgBtn,
  SubmitBtn,
  Thumbnail,
  VideoBtn,
  VideoThumbnail,
} from './GardenDetailCommentWrite.styles';

import { AiOutlineSend } from 'react-icons/ai';
import ImageUpload from '../../../../commons/upload';
import VideoUpload from '../../../../commons/videoupload';

export default function GardenDetailCommentWriteUI(props: any) {
  return (
    <>
      <CommentWriteBox>
        <CommentWriteProfile
          src={
            props?.loginUserInfo?.image.includes('http')
              ? props?.loginUserInfo?.image
              : '/image/defaultuser.png'
          }
        />
        <CommentWriteInputBox>
          <CommentWriteInput
            placeholder='Enter Your Comment Here!'
            type={'text'}
            onChange={props.onChangeComment}
            value={props.comment}
          />
          <CommentWriteBtn>
            {props.isEdit !== true ? (
              <SubmitBtn onClick={props.onClickCommentWrite}>
                <AiOutlineSend style={{ fontSize: '17' }} />
              </SubmitBtn>
            ) : (
              <SubmitBtn onClick={props.onClickCommentUpdate}>
                <AiOutlineSend />
              </SubmitBtn>
            )}
            <ImgBtn>
              <ImageUpload
                onChangeFileUrls={props.onChangeFileUrls}
                fileUrls={props.fileUrls}
                type={'comment'}
              />
            </ImgBtn>
            <VideoBtn>
              <VideoUpload
                onChangeVideoUrls={props.onChangeVideoUrls}
                videoUrls={props.videoUrls}
                type={'comment'}
              />
            </VideoBtn>
          </CommentWriteBtn>
        </CommentWriteInputBox>
      </CommentWriteBox>
      <Thumbnail>
        {props.fileUrls !== '' && <ImageThumbnail src={props.fileUrls} />}
        {props.videoUrls !== '' && (
          <VideoThumbnail src={props.videoUrls} controls />
        )}
      </Thumbnail>
    </>
  );
}
