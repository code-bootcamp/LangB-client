import CommunityListUI from "./CommunityList.presenter";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchCommunityBoardsArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_COMMUNITY_BOARDS } from "../../../commons/queries";

export default function CommunityList() {
  const router = useRouter();

  //커뮤니티 글목록 데이터 가져오기
  const { data } = useQuery<
    Pick<IQuery, "fetchCommunityBoards">,
    IQueryFetchCommunityBoardsArgs
  >(FETCH_COMMUNITY_BOARDS);

  //커뮤니티 새 글 작성페이지로 이동
  const onClickMoveToWrite = () => {
    router.push("./community/write");
  };

  // 글 눌렀을 때 디테일 페이지 이동
  const onClickContent = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/community/${event.currentTarget.id}`);
  };

  return (
    <CommunityListUI
      // 글목록
      data={data}
      // 글 상세페이지 이동
      onClickContent={onClickContent}
      // 새 글 작성
      onClickMoveToWrite={onClickMoveToWrite}
    />
  );
}
