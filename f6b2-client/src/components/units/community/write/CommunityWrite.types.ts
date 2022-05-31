import { ChangeEvent, ComponentType } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface ICommunityBoardWriteProps {
  isEdit: Boolean;
  data?: Pick<IQuery, "fetchCommunityBoard">;
}

export interface ICommunityBoardWriteUIProps {
  isActive: boolean;
  titleError: string;
  contentError: string;
  fileUrls: string[];
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContent: (value: string) => void;
  onChangeFileUrls: (fileUrl: string) => void;
  onClickSubmit: () => void;
  onClickUpdate: () => void;
  data?: Pick<IQuery, "fetchCommunityBoard">;
  commuData?: Pick<IQuery, "fetchCommunityBoard">;
  isEdit: Boolean;
}

export interface IUploadBtnProps {
  isActive: boolean;
}

export interface IUpdateCommunityBoardInput {
  title?: string;
  content?: string;
  fileUrls?: string[];
}
