import { ChangeEvent } from 'react';
import { IUser } from '../../../commons/types/generated/types';

export interface IGardenWrite {
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSave: () => void;
  data: {
    fetchUser: IUser;
  };
  isContent: string;
  onChangeFileUrls: (fileUrl: string) => void;
  fileUrls: Array<string>;
  onChangeVideoUrls: (fileUrl: string) => void;
  videoUrls: string;
  onClickLogin: () => void;
  isToken: string;
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  onClickImageDelete: (index: number) => () => void;
  onClickVideoDelete: () => void;
}

export interface IGardenWriteStyle {
  isContent: string;
}

export interface IGardenWriteVideo {
  onChangeVideoUrls: (fileUrl: string) => void;
  handleClose: () => void;
}
