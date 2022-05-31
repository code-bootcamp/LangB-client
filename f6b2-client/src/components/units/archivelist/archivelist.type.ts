import { ISave } from '../../../commons/types/generated/types';

export interface IArchive {
  data: {
    fetchSavedBoards: Array<ISave>;
  };
  isToken: string;
  onClickLogin: () => void;
}

export interface IArchiveItem {
  el: ISave;
}
