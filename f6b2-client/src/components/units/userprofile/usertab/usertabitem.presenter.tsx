import { Router, useRouter } from 'next/router';
import { getDate } from '../../../../commons/libraries/utils';
import * as TabItem from './usertab.style';

export default function UserTabItemUI(props) {
  const router = useRouter();
  console.log(props.el);
  const onClickMoveDetail = () => {
    props.istab === 'mygarden'
      ? router.push(`/garden/${props.el.id}`)
      : router.push(`/community/${props.el.id}`);
  };

  return (
    <TabItem.WrapperColItem onClick={onClickMoveDetail}>
      <TabItem.ImageItem src={props.el.image} />
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
