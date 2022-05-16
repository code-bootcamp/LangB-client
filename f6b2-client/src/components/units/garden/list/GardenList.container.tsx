import { useState } from 'react';
import GardenListUI from './GardenList.presenter';

export default function GardenList() {
  const [commentListVal, setCommentListVal] = useState(false);

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
    />
  );
}
