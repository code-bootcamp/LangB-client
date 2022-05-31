import * as S from "./CommunityWrite.styles";
// 에디터
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import ImageUpload from "../../../commons/upload";
import { ICommunityBoardWriteUIProps } from "./CommunityWrite.types";
import { v4 as uuidv4 } from "uuid";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../commons/store";

export default function CommunityListUI(props: ICommunityBoardWriteUIProps) {
  const [userInfo] = useRecoilState(userInfoState);
  // 에디터 커스텀
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "blockquote"],
      [{ align: [] }, { color: [] }],
    ],
  };

  return (
    <S.OutWrapper>
      <S.Wrapper>
        <S.InfoWrapper>
          {userInfo?.image.includes("http") ? (
            <S.Profile src={userInfo?.image} />
          ) : (
            <S.Profile src={"/image/defaultuser.png"} />
          )}
          <S.Writer>{userInfo?.name}</S.Writer>
        </S.InfoWrapper>

        <S.ContentsWrapper>
          {/* 사진 */}
          <S.LeftWrapper>
            <S.ImgBtn>
              {props.fileUrls[0] ? (
                <S.ImageThumbnail key={uuidv4()} src={String(props.fileUrls)} />
              ) : (
                <S.ImgWrapper>
                    <ImageUpload
                    onChangeFileUrls={props.onChangeFileUrls}
                    fileUrls={props.fileUrls}
                    type={"community"}
                  />
                  <S.String>Upload Image</S.String>
                </S.ImgWrapper>
              )}
            </S.ImgBtn>
          </S.LeftWrapper>

          <S.RightWrapper>
            {/* 제목 */}
            <S.TitleWrapper>
              <S.TitleInput
                type="text"
                placeholder="Enter your title here"
                onChange={props.onChangeTitle}
                defaultValue={props.data?.fetchCommunityBoard.title || ""}
              />
              <S.Error>{props.titleError}</S.Error>
            </S.TitleWrapper>

            {/* 라인 */}
            {/* <S.Line></S.Line> */}
            {/* 내용 */}
            <S.ReactQuillWrapper>
              {!props.isEdit && (
                <>
                  <ReactQuill
                    onChange={props.onChangeContent}
                    modules={modules}
                    placeholder={"Enter your story here"}
                  />

                  <S.Error>{props.contentError}</S.Error>
                </>
              )}
              {props.isEdit && props.data?.fetchCommunityBoard.content && (
                <>
                  <ReactQuill
                    onChange={props.onChangeContent}
                    defaultValue={props.data?.fetchCommunityBoard.content}
                    modules={modules}
                  />

                  <S.Error>{props.contentError}</S.Error>
                </>
              )}
            </S.ReactQuillWrapper>
            {/* 업로드버튼 */}
          </S.RightWrapper>
        </S.ContentsWrapper>
        <S.BtnWrapper>
          <S.UploadBtn
            onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
            isActive={props.isEdit ? true : props.isActive}
          >
            <S.MdUploadFileIcon />
            {props.isEdit ? "Edit" : "Upload"}
          </S.UploadBtn>
        </S.BtnWrapper>
      </S.Wrapper>
    </S.OutWrapper>
  );
}
