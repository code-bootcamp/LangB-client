import styled from "@emotion/styled";
import { BsFileEarmarkImage } from "react-icons/bs";
import { MdUploadFile } from "react-icons/md";
import { IUploadBtnProps } from "../write/CommunityWrite.types";

export const OutWrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  height: 730px;
`;

export const Wrapper = styled.div`
  margin-top: 64px;
  width: 700px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  margin-bottom: 34px;
  border-bottom: 1px solid #000000;
`;

export const Profile = styled.img`
  margin-right: 14px;
  width: 30px;
  height: 30px;
  filter: drop-shadow(6px 6px 4px rgba(0, 0, 0, 0.25));
  border-radius: 50px;

  /* 완성 후 삭제 */
  background-color: gray;
`;

export const Writer = styled.div`
  font-weight: 700;
  font-size: 15px;
  text-align: center;
  color: #000000;
  text-shadow: 6px 6px 4px rgba(0, 0, 0, 0.25);
`;

export const ContentsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 700px;
  height: 350px;
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 52px;
  padding: 21px 51px 0px 51px;
  width: 300px;
  height: 350px;
  background: #dbdbdb;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-size: 11px;
  font-weight: 700;
  color: #999999;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: max-content;
  max-height: 220px;
`;

export const ImgBtn = styled.div`
  border: none;
  background-color: rgba(255, 255, 255, 0);
`;

export const ImageThumbnail = styled.img`
  width: 300px;
  height: 350px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 20px;
`;
export const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BsFileEarmarkIcon = styled(BsFileEarmarkImage)`
  font-size: 50px;
  color: #999999;
  cursor: pointer;
`;

export const String = styled.div`
  margin-top: 19px;
`;

export const RightWrapper = styled.div`
  align-items: center;
  width: 350px;
  height: 350px;
  padding: 31px;
  background: #3a3939;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const TitleWrapper = styled.div`
  height: 29px;
  margin-bottom: 17px;
  width: 280px;
`;

export const TitleInput = styled.input`
  padding-left: 9px;
  width: 100%;
  height: 29px;
  color: white;
  text-align: start;
  background: #3a3939;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  ::placeholder {
    color: #cdcdcd;
    font-size: 14px;
  }
  :focus {
    outline: none;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid #cdcdcd;
`;

// 에디터
export const ReactQuillWrapper = styled.div`
  margin-top: 17px;
  width: 280px;
  background-color: rgba(0, 0, 0, 0);

  .quill {
    color: white;
    background: #3a3939;
    border: 1px solid #dbdbdb;
    box-shadow: 7px 7px 5px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }
  .ql-toolbar ql-snow {
    height: 36px;
    color: white;
  }
  .ql-toolbar.ql-snow {
    border: none;
    border-bottom: 2px solid #b9b9b9;
    font-size: 8px;
    color: #cdcdcd;
  }

  .ql-container {
    height: 192px;
  }
  .ql-container.ql-snow {
    border: none;
  }
  .quill > .ql-container > .ql-editor.ql-blank::before {
    color: #cdcdcd;
    font-size: 14px;
  }
  .ql-formats {
    size: 7px;
  }

  .ql-toolbar .ql-stroke {
    fill: none;
    stroke: #cdcdcd;
  }

  .ql-toolbar .ql-picker {
    color: #cdcdcd;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 45px;
`;

export const UploadBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 24px;
  color: white;
  font-size: 11px;
  font-weight: 700;
  border: none;
  box-shadow: 7px 7px 5px rgba(0, 0, 0, 0.25);
  border-radius: 17px;
  background-color: ${(props: IUploadBtnProps) =>
    props.isActive ? "#FFB950" : "#3A3939"};
  cursor: pointer;
`;

export const MdUploadFileIcon = styled(MdUploadFile)``;

export const Error = styled.div`
  padding: 2px 0px 0px 5px;
  font-size: 7px;
  color: red;
`;

export const ImageItempWrap = styled.div``;
