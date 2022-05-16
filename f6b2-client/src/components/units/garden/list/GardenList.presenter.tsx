import GardenCommentList from '../comment/list/GardenCommentList.container';
import GardenCommentWrite from '../comment/write/GardenCommentWrite.container';
import {
  CommentCount,
  CommentListBtn,
  Contents,
  ContentsBox,
  ContentsImg,
  ContentsTranslate,
  ContentsTranslateBox,
  CreatedAt,
  GardenListBox,
  Like,
  LikeAndCommentCount,
  LikeAndCommentCountBox,
  Wrapper,
  WriterInfo,
  WriterInfoBox,
  WriterName,
  WriterProfile,
} from './GardenList.styles';
import { MdQuestionAnswer, MdThumbUp } from 'react-icons/md';
import GardenBestList from '../bestList/GardenBestList.container';

export default function GardenListUI(props) {
  return (
    <Wrapper>
      <GardenBestList />
      {/* {props.data?.fetchBoards.map((el, index) => ( */}
      <GardenListBox>
        <WriterInfoBox>
          <WriterProfile />
          <WriterInfo>
            <WriterName></WriterName>
            <CreatedAt></CreatedAt>
          </WriterInfo>
        </WriterInfoBox>
        <ContentsBox>
          <Contents></Contents>
          <ContentsTranslateBox>
            {/* 번역API 버튼 자리? */}
            <ContentsTranslate>
              ex ) 여러분에게 물어볼 것이 있습니다! 이 꽃은 한국어로 뭐라고
              부릅니까?
            </ContentsTranslate>
          </ContentsTranslateBox>
          <ContentsImg />
          <LikeAndCommentCountBox>
            {props.commentListVal === true ? (
              <CommentListBtn onClick={props.onClickCommentListBtn}>
                Close Comments
              </CommentListBtn>
            ) : (
              <CommentListBtn onClick={props.onClickCommentListBtn}>
                Open Comments
              </CommentListBtn>
            )}
            <LikeAndCommentCount>
              <Like>
                <MdThumbUp />
              </Like>
              <CommentCount>
                <MdQuestionAnswer /> 1
              </CommentCount>
            </LikeAndCommentCount>
          </LikeAndCommentCountBox>
        </ContentsBox>
        {/* GardenCommentWrite */}
        <GardenCommentWrite />
        {/* GardenCommentList */}
        {props.commentListVal === true ? <GardenCommentList /> : <div></div>}
      </GardenListBox>
      {/* ))} */}
    </Wrapper>
  );
}
