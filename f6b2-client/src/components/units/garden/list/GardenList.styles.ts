import styled from "@emotion/styled";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import { IoChatbubbleOutline } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";

export const TmpDiv = styled.div`
  width: 100%;
  height: 60px;
`;

export const DivTmp = styled.div`
  width: auto;
  height: auto; ;
`;

export const GardenWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: auto;
`;

export const WrapperLeft = styled.div`
  width: 285px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 98px 47px 0px 0px;
  position: sticky;
  top: 60px;
`;

export const Wrapper = styled.div`
  width: 510px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding-top: 45px;
`;
export const WrapperRight = styled.div`
  width: 236px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: sticky;
  top: 60px;
  margin-left: 50px;
  padding: 98px 0px 0px 0px;
`;

export const InputSearchBar = styled.input`
  width: 100%;
  height: 31px;
  border: none;
  margin-bottom: 20px;
  color: #909090;
  padding: 8px 20px;

  background: rgba(219, 219, 219, 0.55);
  border-radius: 25px;
  :focus {
    outline: none;
  }
`;

export const GardenListBox = styled.main`
  width: 510px;
  padding: 30px;
  border: 1px solid #dbdbdb;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  margin-bottom: 17px;
`;

export const WriterInfoBox = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const WriterProfile = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin-right: 10px;
  cursor: pointer;
  object-fit: cover;
  background-color: white;
`;

export const WriterInfo = styled.article`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const WriterName = styled.strong`
  font-weight: 700;
  font-size: 14px;
  margin-right: 5px;
`;

export const CreatedAt = styled.time`
  margin-top: 1px;
  font-weight: 400;
  font-size: 11px;
  color: #65676b;
`;

export const ContentsBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Contents = styled.div`
  width: 100%;
  font-weight: 400;
  font-size: 12px;
  margin-top: 5px;
  margin-bottom: 15px;
`;

export const ContentsTranslateBox = styled.article`
  width: 100%;
  border-bottom: 1px solid gray;
  padding: 5px;
`;

export const ContentsTranslate = styled.div`
  font-weight: 400;
  font-size: 13px;
  color: #a4b1da;
`;

export const LikeAndCommentCountBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Like = styled.button`
  width: auto;
  border: none;
  background: none;
  cursor: pointer;
  font-weight: 400;
  font-size: 12px;
  margin-right: 30px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const CommentCount = styled.div`
  font-weight: 400;
  font-size: 12px;
  margin-right: 9px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const CommentListBtn = styled.button`
  border: none;
  background: none;
  font-weight: 400;
  font-size: 12px;
  color: gray;
  cursor: pointer;
`;

export const LikeAndCommentCount = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const NameRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InputSearchBarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LikeOn = styled(BsHeartFill)`
  font-size: 13px;
  color: red;
  margin-right: 5px;
`;

export const LikeOff = styled(BsHeart)`
  font-size: 13px;
  margin-right: 5px;
`;

export const CommentIcon = styled(IoChatbubbleOutline)`
  font-size: 13px;
  margin-right: 5px;
`;

export const SpanCommentCount = styled.span`
  font-size: 12px;
  line-height: 18px;
`;

export const WrapperSearch = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const IconSearch = styled(BsSearch)`
  position: relative;
  font-size: 18px;
  left: -30px;
  top: -10px;
`;

export const WrapperIconRow = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
