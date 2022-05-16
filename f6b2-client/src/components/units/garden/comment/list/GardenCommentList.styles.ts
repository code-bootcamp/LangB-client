import styled from '@emotion/styled';

export const CommentListBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  border-top: 1px solid gray;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const CommentProfile = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin-right: 20px;

  //test
  background-color: gray;
`;

export const CommentContentsBox = styled.main`
  background-color: #a4b1da;
  padding: 15px;
  border-radius: 0px 15px 15px 15px;
  margin-right: 10px;
`;

export const CommentInfo = styled.div`
  margin-bottom: 10px;
`;

export const CommentName = styled.article`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const CommentText = styled.article`
  font-size: 18px;
  margin-bottom: 5px;
`;

export const CommentImg = styled.img`
  width: 200px;
  margin-top: 10px;
  border-radius: 15px;

  // test
  height: 150px;
  background-color: gray;
`;

export const CommentBtns = styled.section`
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

export const CreatedAt = styled.time`
  font-size: 15px;
  color: #65676b;
`;
