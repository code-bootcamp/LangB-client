import {
  CommentWriteBox,
  CommentWriteBtn,
  CommentWriteInput,
  CommentWriteInputBox,
  CommentWriteProfile,
  Img,
  ImgBtn,
  MediaWrapper,
  SubmitBtn,
  Video,
  VideoBtn,
  Wrapper,
} from "./GardenCommentEdit.styles";
import { MdForwardToInbox, MdPhoto, MdPhotoCameraFront } from "react-icons/md";
import { BiSend } from "react-icons/bi";
import ImageUpload from "../../../../commons/upload";
import VideoUpload from "../../../../commons/videoupload";

export default function GardenCommentEditUI(props: any) {
  return (
    <Wrapper>
      <CommentWriteBox>
        {props.loginInfo?.image.includes("http") ? (
          <CommentWriteProfile src={props.loginInfo?.image} />
        ) : (
          <CommentWriteProfile src="https://cdn.discordapp.com/attachments/974505238029533295/980389912345972736/defaultuser.png" />
        )}
        <CommentWriteInputBox>
          <CommentWriteInput
            placeholder="Edit Your Comment Here!"
            type={"text"}
            onChange={props.onChangeComment}
            defaultValue={props.commentEl?.content}
          />
          <CommentWriteBtn>
            {props.isEdit !== true ? (
              <SubmitBtn onClick={props.onClickCommentWrite}>
                <BiSend />
              </SubmitBtn>
            ) : (
              <SubmitBtn onClick={props.onClickCommentUpdate}>
                <BiSend />
              </SubmitBtn>
            )}
            <ImgBtn>
              <ImageUpload
                onChangeFileUrls={props.onChangeFileUrls}
                fileUrls={props.fileUrls}
                type={"comment"}
              />
            </ImgBtn>
            <VideoBtn>
              <VideoUpload
                onChangeVideoUrls={props.onChangeVideoUrls}
                videoUrls={props.videoUrls}
                type={"comment"}
              />
            </VideoBtn>
          </CommentWriteBtn>
        </CommentWriteInputBox>
      </CommentWriteBox>
      <MediaWrapper>
        {props.fileUrls === "" && props.commentEl.image.includes("http") ? (
          <Img src={props.commentEl.image} />
        ) : (
          ""
        )}
        {props.videoUrls === "" && props.commentEl.video.includes("http") ? (
          <Video src={props.commentEl.video} controls />
        ) : (
          ""
        )}
        {props.fileUrls !== "" && <Img src={props.fileUrls} />}
        {props.videoUrls !== "" && <Video src={props.videoUrls} controls />}
      </MediaWrapper>
    </Wrapper>
  );
}
