import styled from "@emotion/styled";

export const CommentWriteBox = styled.main`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const CommentWriteProfile = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin-right: 15px;
  background-color: white;

  background-color: gray;
`;

export const CommentWriteInputBox = styled.article`
  width: 385px;
  height: 34px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #ffffff;
  border-radius: 10px;
  border: 1px solid #dbdbdb;
`;

export const CommentWriteInput = styled.input`
  width: 100%;
  height: 24px;
  border: none;
  margin-left: 3.5px;
  font-weight: 400;
  font-size: 12px;
  padding-left: 9.5px;
`;

export const CommentWriteBtn = styled.section`
  width: 130px;
  display: flex;
  flex-direction: row;
  margin-left: 8px;
`;

export const SubmitBtn = styled.button`
  border: none;
  background: none;
  color: black;
  font-size: 25px;
  cursor: pointer;
`;

export const ImgBtn = styled.button`
  border: none;
  background: none;
  color: black;
  font-size: 25px;
  cursor: pointer;
  margin-left: 13px;
`;

export const VideoBtn = styled.button`
  border: none;
  background: none;
  color: black;
  font-size: 25px;
  cursor: pointer;
  margin-left: 13px;
`;

export const MediaWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Img = styled.img`
  width: 180px;
  height: 125px;
  object-fit: cover;
  border-radius: 10px;
`;

export const Video = styled.video`
  width: 180px;
  height: 125px;
  object-fit: cover;
  border-radius: 10px;
`;

export const Wrapper = styled.div``;
