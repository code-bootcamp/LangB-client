import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface ICommunityListUIProps {
  data?: Pick<IQuery, "fetchCommunityBoards"> | undefined;
  onClickMoveToWrite: () => void;
  onClickContent: (event: MouseEvent<HTMLDivElement>) => void;
}
