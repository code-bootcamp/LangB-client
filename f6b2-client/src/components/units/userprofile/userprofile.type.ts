import { MouseEvent } from 'react';

export interface IUserProfilePresenter {
  userGarden: any;
  userCommunity: any;
  receipts: any;
  onClickTab: (event: MouseEvent<HTMLButtonElement>) => void;
  istab: string;
  user: any;
  onClickEdit: () => void;
  community: any;
  handleClose: () => void;
  open: boolean;
  isMy: boolean;
}
