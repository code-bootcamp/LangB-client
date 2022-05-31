import { useQuery } from '@apollo/client';
import { Router, useRouter } from 'next/router';
import { getDate } from '../../../../commons/libraries/utils';
import { FETCH_BOARD_IMAGE } from './usertabitem.queries';
import * as TabItem from './usertabitem.style';
import { IUsertabPresenter } from './usertabitem.type';

export default function UserTabItemUI(props: IUsertabPresenter) {
  const router = useRouter();
  const { data: boardImage } = useQuery(FETCH_BOARD_IMAGE, {
    variables: { boardId: props.el.id },
  });
  const onClickMoveDetail = () => {
    props.istab === 'mygarden'
      ? router.push(`/garden/${props.el.id}`)
      : router.push(`/community/${props.el.id}`);
  };

  return (
    <TabItem.WrapperColItem onClick={onClickMoveDetail}>
      {props.istab === 'mygarden' ? (
        props.el?.video?.includes('http') ? (
          <TabItem.VideoItem src={props.el?.video} autoPlay muted loop />
        ) : (
          <TabItem.ImageItem
            src={
              boardImage?.fetchBoardImage[0]?.image.includes('http')
                ? boardImage?.fetchBoardImage[0]?.image
                : '/image/default1.jpg'
            }
          />
        )
      ) : (
        <TabItem.ImageItem
          src={
            boardImage?.fetchBoardImage[0]?.image.includes('http')
              ? boardImage?.fetchBoardImage[0]?.image
              : '/image/default1.jpg'
          }
        />
      )}

      <TabItem.WrapperRowItem>
        <TabItem.PItemDate>{getDate(props.el.createdAt)}</TabItem.PItemDate>
        <TabItem.WrapperRowRightItem>
          <TabItem.IconLike />
          <TabItem.PItemLikeCount>{props.el.likes}</TabItem.PItemLikeCount>
        </TabItem.WrapperRowRightItem>
      </TabItem.WrapperRowItem>
    </TabItem.WrapperColItem>
  );
}
