import {
  CommentBtns,
  CommentContentsBox,
  CommentImg,
  CommentInfo,
  CommentListBox,
  CommentName,
  CommentProfile,
  CommentText,
  CommentVideo,
  ContentWrapper,
  CreatedAt,
  DeleteBtn,
  EditBtn,
  Like,
  MediaBox,
  OtherBtns,
  Row1,
  LikeOn,
  LikeOff,
  InfoWrapper,
} from "./GardenDetailCommentList.styles";
import styled from "@emotion/styled";
import { MdModeEditOutline, MdOutlineClear } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { Image } from "antd";
import "antd/dist/antd.css";
import { getDate } from "../../../../../commons/libraries/utils";
import GardenDetailCommentEdit from "../edit/GardenDetailCommentEdit.container";

const Image1 = styled(Image)`
  object-fit: cover;
  border-radius: 10px;
`;

export default function GardenDetailCommentListUI(props) {
  return (
    <>
      {props.comments?.fetchComments.map((el, index) => (
        <>
          <CommentListBox key={index}>
            <CommentProfile
              src={
                el.writer?.image.includes("http")
                  ? el.writer?.image
                  : "/image/defaultuser.png"
              }
            />
            <CommentContentsBox>
              <CommentInfo>
                <Row1>
                  <InfoWrapper>
                    <CommentName>{el.writer.name}</CommentName>
                    <CreatedAt datetime={el.createdAt} locale="ko">
                      {getDate(el.createdAt)}
                    </CreatedAt>
                  </InfoWrapper>

                  {props.loginInfo?.name === el.writer.name && (
                    <OtherBtns>
                      <EditBtn onClick={props.commentEditBtn(index)}>
                        <MdModeEditOutline size={14} />
                      </EditBtn>
                      <DeleteBtn
                        onClick={props.onClickDeleteComment}
                        id={el.id}
                      >
                        <MdOutlineClear size={14} />
                      </DeleteBtn>
                    </OtherBtns>
                  )}
                </Row1>
              </CommentInfo>
              <ContentWrapper>
                <CommentText>{el.content}</CommentText>
                {props.myLike?.fetchLikedComment.filter(
                  (el2) => el2.comment.id === el.id
                ).length > 0 ? (
                  props.myLike?.fetchLikedComment.map((el3) =>
                    el3.comment.id === el.id ? (
                      el3.isLiked ? (
                        <Like onClick={props.onClickCommentLike} id={el.id}>
                          <LikeOn />
                        </Like>
                      ) : (
                        <Like onClick={props.onClickCommentLike} id={el.id}>
                          <LikeOff />
                        </Like>
                      )
                    ) : (
                      ""
                    )
                  )
                ) : (
                  <Like onClick={props.onClickCommentLike} id={el.id}>
                    <LikeOff />
                  </Like>
                )}
              </ContentWrapper>
              <MediaBox>
                {el.image !== "" && <Image1 src={el.image} width={300} />}
                {el.video !== "" && <CommentVideo src={el.video} controls />}
              </MediaBox>
            </CommentContentsBox>
            {/* 버튼 조건 (작성자-유저 이름이 동일 시, 보임) */}
            {/* <CommentBtns></CommentBtns> */}
          </CommentListBox>
          {/* 댓글 수정창! */}
          {props.commentEditVal[index] && (
            <GardenDetailCommentEdit
              commentEl={el}
              isEdit={true}
              boardElId={props.boardElId}
            />
          )}
        </>
      ))}
    </>
  );
}
