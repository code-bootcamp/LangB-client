import { useQuery } from '@apollo/client';
import { FETCH_BOARD_IMAGE } from '../../../commons/queries';
import GardenDetailImgUI from './gardenDetailImg.presenter';

export default function GardenDetailImg(props: any) {
  const { data } = useQuery(FETCH_BOARD_IMAGE, {
    variables: {
      boardId: props.boardId,
    },
  });
  return <GardenDetailImgUI data={data} video={props.video} />;
}
