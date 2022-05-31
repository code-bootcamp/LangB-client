import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import GardenListUI from "./GardenSearch.presenter";
import {
  FETCH_BOARDS,
  FETCH_SAVED_BOARDS,
  SAVE_BOARD,
  SEARCH_BOARD_CONTENT,
} from "../../../commons/queries";
import { IBoard } from "../../../../commons/types/generated/types";
import { LIKE_BOARD } from "./GardenSearch.queries";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../../commons/store";
import { useRouter } from "next/router";

export default function GardenSearch(props: any) {
  const router = useRouter();
  const [saveGarden] = useMutation(SAVE_BOARD);
  const { data, fetchMore } = useQuery(FETCH_BOARDS);
  const [likeBoard] = useMutation(LIKE_BOARD);

  const [loginUserInfo] = useRecoilState(userInfoState);

  const [isToken, setIsToken] = useRecoilState(accessTokenState);

  const { data: searchBoard } = useQuery(SEARCH_BOARD_CONTENT, {
    variables: {
      content: props.searchKeyword,
    },
  });

  const [commentListVal, setCommentListVal] = useState([false]);
  const onClickCommentListBtn = (index: any) => (event: any) => {
    const newCommentOpen = [...commentListVal];
    newCommentOpen[index] = !commentListVal[index];
    setCommentListVal(newCommentOpen);
  };

  const onClickLikeBoard = async (event: any) => {
    try {
      await likeBoard({
        variables: {
          boardId: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARDS,
            variables: {
              boardId: event.target.id,
            },
          },
        ],
      });
    } catch (error) {
      alert(error);
    }
  };

  const onClickSaved = async (data: IBoard) => {
    try {
      const result = await saveGarden({
        variables: {
          boardId: data.id,
        },
        refetchQueries: [
          {
            query: FETCH_SAVED_BOARDS,
            variables: {
              userId: loginUserInfo.id,
            },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickUserProfile = (event: any) => {
    router.push(`/profile/${event.target.id}`);
  };

  const [searchKeyword, setSearchKeyword] = useState("");
  const onChangeSearchKeyword = (event: any) => {
    setSearchKeyword(event.target.value);
  };

  return (
    <GardenListUI
      commentListVal={commentListVal}
      onClickCommentListBtn={onClickCommentListBtn}
      data={data}
      onClickSaved={onClickSaved}
      onClickLikeBoard={onClickLikeBoard}
      loginUserInfo={loginUserInfo}
      onClickUserProfile={onClickUserProfile}
      isToken={isToken}
      onChangeSearchKeyword={onChangeSearchKeyword}
      searchKeyword={props.searchKeyword}
      searchBoard={searchBoard}
    />
  );
}
