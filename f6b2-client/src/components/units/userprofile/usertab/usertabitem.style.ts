import styled from '@emotion/styled';
import { FcLike } from 'react-icons/fc';

export const Wrapper = styled.div`
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const WrapperItem = styled.div`
  width: auto;
  height: auto;
`;

export const WrapperColItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 106px;
  height: 152px;
  margin: 10px 10px;
  :hover {
    cursor: pointer;
  }
`;

export const ImageItem = styled.img`
  width: 106px;
  height: 130px;
  object-fit: cover;
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin-bottom: 8px;
`;

export const VideoItem = styled.video`
  width: 106px;
  height: 130px;
  object-fit: cover;
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin-bottom: 8px;
`;

export const WrapperRowItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: auto;
`;
export const WrapperRowRightItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: auto;
  height: auto;
`;

export const PItemDate = styled.p`
  width: 60%;
  height: auto;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  text-align: left;
  color: #000000;
  text-shadow: 6px 6px 6px rgba(0, 0, 0, 0.25);
  margin: 0px;
`;

export const IconLike = styled(FcLike)`
  font-size: 10px;
  margin-right: 5px;
`;

export const PItemLikeCount = styled.p`
  width: auto;
  height: auto;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  text-align: right;
  color: #000000;
  margin: 0px;
`;
