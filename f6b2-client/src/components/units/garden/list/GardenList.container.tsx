import { useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import GardenListUI from './GardenList.presenter';
import {
  FETCH_BOARDS,
  FETCH_SAVED_BOARDS,
  SAVE_BOARD,
} from '../../../commons/queries';
import { IBoard } from '../../../../commons/types/generated/types';
import { LIKE_BOARD } from './GardenList.queries';
import { useRecoilState } from 'recoil';
import { accessTokenState, userInfoState } from '../../../../commons/store';
import { useRouter } from 'next/router';

export default function GardenList() {
  const router = useRouter();
  const [saveGarden] = useMutation(SAVE_BOARD);
  const [loginUserInfo] = useRecoilState(userInfoState);

  const { data: savedInfo } = useQuery(FETCH_SAVED_BOARDS, {
    variables: {
      userId: loginUserInfo?.id,
    },
  });

  const { data, fetchMore } = useQuery(FETCH_BOARDS, {
    variables: {
      pageSize: 5,
      page: 1,
      myLang: loginUserInfo?.newLang,
    },
  });
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [isToken, setIsToken] = useRecoilState(accessTokenState);

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
          boardId: event.currentTarget.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARDS,
            variables: {
              boardId: event.currentTarget.id,
            },
          },
          {
            query: FETCH_SAVED_BOARDS,
            variables: {
              userId: loginUserInfo.id,
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

  const loadFunc = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoards.length / 5) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoards)
          return { fetchBoards: [...prev.fetchBoards] };
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
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
      loadFunc={loadFunc}
      onClickLikeBoard={onClickLikeBoard}
      loginUserInfo={loginUserInfo}
      onClickUserProfile={onClickUserProfile}
      isToken={isToken}
      onChangeSearchKeyword={onChangeSearchKeyword}
      searchKeyword={searchKeyword}
      savedInfo={savedInfo}
    />
  );
}
