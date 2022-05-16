import styled from '@emotion/styled';

export const CommentWriteBox = styled.main`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  // test
  /* background-color: gray; */
`;

export const CommentWriteProfile = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;

  //test
  background-color: gray;
`;

export const CommentWriteInputBox = styled.article`
  width: 610px;
  height: 50px;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  // test
  background-color: #a4b1da;
`;

export const CommentWriteInput = styled.input`
  width: 450px;
  height: 35px;
  border: none;
  border-radius: 7px;
`;

export const CommentWriteBtn = styled.section`
  width: 130px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SubmitBtn = styled.button`
  border: none;
  background: none;
  color: white;
  font-size: 25px;
  cursor: pointer;
`;

export const ImgBtn = styled.button`
  border: none;
  background: none;
  color: white;
  font-size: 25px;
  cursor: pointer;
`;

export const VideoBtn = styled.button`
  border: none;
  background: none;
  color: white;
  font-size: 25px;
  cursor: pointer;
`;
