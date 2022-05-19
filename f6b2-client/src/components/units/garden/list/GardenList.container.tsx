import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import GardenListUI from "./GardenList.presenter";
import {
  FETCH_BOARDS,
  FETCH_COMMENTS,
  SAVE_BOARD,
} from "../../../commons/queries";
import { IBoard } from "../../../../commons/types/generated/types";

export default function GardenList() {
  const [commentListVal, setCommentListVal] = useState([false]);

  // 댓글 펼치기
  const onClickCommentListBtn = (index) => (event) => {
    const newCommentOpen = [...commentListVal];
    newCommentOpen[index] = !commentListVal[index];
    setCommentListVal(newCommentOpen);
    console.log("AAA", commentListVal);
  };

  const [saveGarden] = useMutation(SAVE_BOARD);

  const { data, fetchMore } = useQuery(FETCH_BOARDS);

  // 저장하기 버튼 클릭 함수
  const onClickSaved = async (data: IBoard) => {
    try {
      const result = await saveGarden({
        variables: {
          boardId: data.id,
          userId: data.writer.id,
        },
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  // 무한스크롤
  const loadFunc = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoards.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoards)
          return { fetchBoards: [...prev.fetchBoards] };
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  return (
    <GardenListUI
      commentListVal={commentListVal}
      onClickCommentListBtn={onClickCommentListBtn}
      data={data}
      onClickSaved={onClickSaved}
      loadFunc={loadFunc}
    />
  );
}
