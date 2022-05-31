import styled from "@emotion/styled";
import TimeAgo from "timeago-react";
import { BsHeartFill, BsHeart } from "react-icons/bs";

export const CommentListBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  padding-top: 15px;
`;

export const CommentProfile = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin-right: 10px;
  margin-left: 10px;

  background-color: white;
`;

export const CommentContentsBox = styled.main`
  width: 100%;
`;

export const CommentInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommentName = styled.article`
  font-weight: 700;
  font-size: 14px;
`;

export const CommentText = styled.article`
  font-weight: 400;
  font-size: 12px;
  color: black;
  width: 300px;
`;

export const CommentImg = styled.img`
  width: 200px;
  margin-top: 10px;
  border-radius: 10px;
`;

export const CommentVideo = styled.video`
  width: 300px;
  margin-top: 10px;
  border-radius: 10px;
`;

export const MediaBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommentBtns = styled.section`
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const EditBtn = styled.button`
  border: none;
  background: none;
  font-size: 20px;
  cursor: pointer;
`;

export const DeleteBtn = styled.button`
  border: none;
  background: none;
  font-size: 20px;
  cursor: pointer;
`;

export const CreatedAt = styled(TimeAgo)`
  font-weight: 400;
  font-size: 11px;
  color: #767676;
  margin-left: 10px;
`;

export const Like = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
  margin-top: 15px;
  font-size: 12px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 50px;
`;

export const OtherBtns = styled.div`
  margin-left: 20px;
`;

export const Row1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const LikeOn = styled(BsHeartFill)`
  font-size: 13px;
  color: red;
`;

export const LikeOff = styled(BsHeart)`
  font-size: 13px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LikeNumber = styled.div`
  margin-left: 10px;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;

  color: #767676;
`;
