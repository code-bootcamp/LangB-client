import {
  CommentWriteBox,
  CommentWriteBtn,
  CommentWriteInput,
  CommentWriteInputBox,
  CommentWriteProfile,
  ImgBtn,
  SubmitBtn,
  VideoBtn,
} from './GardenCommentWrite.styles';
import { MdForwardToInbox, MdPhoto, MdPhotoCameraFront } from 'react-icons/md';

export default function GardenCommentWriteUI() {
  return (
    <CommentWriteBox>
      <CommentWriteProfile />
      <CommentWriteInputBox>
        <CommentWriteInput placeholder='Enter Your Comment Here!' />
        <CommentWriteBtn>
          <SubmitBtn>
            <MdForwardToInbox />
          </SubmitBtn>
          <ImgBtn>
            <MdPhoto />
          </ImgBtn>
          <VideoBtn>
            <MdPhotoCameraFront />
          </VideoBtn>
        </CommentWriteBtn>
      </CommentWriteInputBox>
    </CommentWriteBox>
  );
}
