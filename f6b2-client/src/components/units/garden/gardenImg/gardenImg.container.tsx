import { useQuery } from "@apollo/client";
import { FETCH_BOARD_IMAGE } from "../../../commons/queries";
import GardenImgUI from "./gardenImg.presenter";

export default function GardenImg(props: any) {
  const { data } = useQuery(FETCH_BOARD_IMAGE, {
    variables: {
      boardId: props.boardId,
    },
  });
  return <GardenImgUI data={data} video={props.video} />;
}
