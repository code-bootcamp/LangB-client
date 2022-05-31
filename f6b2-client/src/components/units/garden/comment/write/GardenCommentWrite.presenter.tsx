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
} from "./GardenCommentWrite.styles";
import { MdForwardToInbox, MdPhoto, MdPhotoCameraFront } from "react-icons/md";
import { BiSend } from "react-icons/bi";
import ImageUpload from "../../../../commons/upload";
import VideoUpload from "../../../../commons/videoupload";
import { Tooltip } from "@mui/material";

export default function GardenCommentWriteUI(props: any) {
  return (
    <>
      <CommentWriteBox>
        {props.loginInfo?.image.includes("http") ? (
          <CommentWriteProfile src={props.loginInfo?.image} />
        ) : (
          <CommentWriteProfile src={"/image/defaultuser.png"} />
        )}
        <CommentWriteInputBox>
          <CommentWriteInput
            placeholder="Enter Your Comment Here!"
            type={"text"}
            onChange={props.onChangeComment}
            value={props.comment}
          />
          <CommentWriteBtn>
            {props.isEdit !== true ? (
              <Tooltip title="Save Comment">
                <SubmitBtn onClick={props.onClickCommentWrite}>
                  <BiSend />
                </SubmitBtn>
              </Tooltip>
            ) : (
              <Tooltip title="Update Comment">
                <SubmitBtn onClick={props.onClickCommentUpdate}>
                  <MdForwardToInbox />
                </SubmitBtn>
              </Tooltip>
            )}
            <Tooltip title="Upload Image">
              <ImgBtn>
                <ImageUpload
                  onChangeFileUrls={props.onChangeFileUrls}
                  fileUrls={props.fileUrls}
                  type={"comment"}
                />
              </ImgBtn>
            </Tooltip>
            <Tooltip title="Upload Video">
              <VideoBtn>
                <VideoUpload
                  onChangeVideoUrls={props.onChangeVideoUrls}
                  videoUrls={props.videoUrls}
                  type={"comment"}
                />
              </VideoBtn>
            </Tooltip>
          </CommentWriteBtn>
        </CommentWriteInputBox>
      </CommentWriteBox>
      <Thumbnail>
        {props.fileUrls !== "" && <ImageThumbnail src={props.fileUrls} />}
        {props.videoUrls !== "" && (
          <VideoThumbnail src={props.videoUrls} controls />
        )}
      </Thumbnail>
    </>
  );
}
