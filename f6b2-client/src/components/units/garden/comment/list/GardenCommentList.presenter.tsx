import {
  CommentBtns,
  CommentContentsBox,
  CommentImg,
  CommentInfo,
  CommentListBox,
  CommentName,
  CommentProfile,
  CommentText,
  CreatedAt,
  DeleteBtn,
  EditBtn,
} from './GardenCommentList.styles';
import { MdModeEditOutline, MdOutlineClear } from 'react-icons/md';

export default function GardenCommentListUI() {
  return (
    <CommentListBox>
      <CommentProfile />
      <CommentContentsBox>
        <CommentInfo>
          <CommentName>Joonyoung</CommentName>
          <CreatedAt>2022.05.12</CreatedAt>
        </CommentInfo>
        <CommentText>Hi!</CommentText>
        <CommentImg></CommentImg>
      </CommentContentsBox>
      <CommentBtns>
        <EditBtn>
          <MdModeEditOutline />
        </EditBtn>
        <DeleteBtn>
          <MdOutlineClear />
        </DeleteBtn>
      </CommentBtns>
    </CommentListBox>
  );
}
