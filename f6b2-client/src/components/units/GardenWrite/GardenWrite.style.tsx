import styled from '@emotion/styled';
import { AiOutlineVideoCamera } from 'react-icons/ai';
import { IGardenWriteStyle } from './GardenWrite.type';

export const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 236px;
  min-height: 185px;
  height: auto;
  background-color: #fff;
  padding: 20px 20px;
  margin-bottom: 20px;
  border: 1px solid #dbdbdb;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
  border-radius: 0px 50px;
`;

export const WrapperRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  padding-bottom: 4px;
`;

export const WrapperImgProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border: none;
  margin-right: 10px;
`;

export const ImgProfile = styled.img`
  width: 25px;
  height: 25px;
  background-color: gray;
  border-radius: 50%;
`;
export const H2ProfileName = styled.h2`
  width: 100%;
  height: 100%;
  font-size: 14px;
`;

export const TextareaContents = styled.textarea`
  width: 100%;
  height: 69px;
  padding: 8px 7px;
  border: none;
  background: rgba(219, 219, 219, 0.55);
  border-radius: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  color: #767676;
`;

export const ImgIcon = styled.img`
  width: 45px;
  height: 45px;
`;

export const ButtonSave = styled.button`
  width: 100px;
  height: 25px;
  background: #ffb950;
  border-radius: 10px;
  border: none;
  color: white;
  display: ${(props: IGardenWriteStyle) => !!!props.isContent && 'none'};
  font-family: 'Istok Web';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 17px;
  text-align: center;
`;

export const WrapperRowIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  padding-top: 10px;
`;

export const ImageItempWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  height: auto;
  margin-top: 20px;
`;

export const ImageThumbnail = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 10%;
`;

export const VideoItempWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  height: auto;
  margin-top: 20px;
`;

export const VideoThumbnail = styled.video`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 10%;
`;

export const WrapperItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
`;

export const GardenRecordUpload = styled(AiOutlineVideoCamera)`
  font-size: 17px;
  color: #ffb950;
  margin-right: 18px;

  :hover {
    cursor: pointer;
  }
`;

export const MoveToLogin = styled.button`
  width: 100px;
  height: 40px;
  background-color: #ffb950;
  color: white;
  border: none;
  border-radius: 10px;
  :hover {
    cursor: pointer;
  }
`;
