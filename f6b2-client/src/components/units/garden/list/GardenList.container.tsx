import { useQuery } from '@apollo/client';
import { useState } from 'react';
import GardenListUI from './GardenList.presenter';
import { FETCH_BOARDS } from './GardenList.queries';

export default function GardenList() {
  const [commentListVal, setCommentListVal] = useState(false);
  const { data } = useQuery(FETCH_BOARDS);

  const onClickCommentListBtn = () => {
    if (commentListVal === false) {
      setCommentListVal(true);
    } else {
      setCommentListVal(false);
    }
  };

  return (
    <GardenListUI
      commentListVal={commentListVal}
      onClickCommentListBtn={onClickCommentListBtn}
      data={data}
    />
  );
}
