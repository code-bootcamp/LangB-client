import {
  ChatAccessBox,
  ChatAccessInfoBox,
  JoinChatBtn,
  LanguageBox,
  NameInput,
  SelectLanguage,
  SelectList,
  SubTitle,
  Title,
  UserName,
  Wrapper,
} from "./ChatAccess.styles";

export default function ChatAccessUI(props: any) {
  return (
    <>
      <Wrapper>
        <ChatAccessBox>
          <ChatAccessInfoBox>
            <Title>Language Group Chat</Title>
            <UserName>
              <SubTitle>User Name</SubTitle>
              <NameInput
                placeholder="Enter your user name"
                onChange={props.onChangeName}
              />
            </UserName>
            <LanguageBox>
              <SubTitle>Language</SubTitle>
              <SelectLanguage
                defaultValue={"Select language"}
                onChange={props.onChangeLanguage}
              >
                <SelectList disabled={true}>Select language</SelectList>
                <SelectList value={"한국어"}>한국어</SelectList>
                <SelectList value={"english"}>English</SelectList>
                <SelectList value={"日本語"}>日本語</SelectList>
                <SelectList value={"español"}>español</SelectList>
                <SelectList value={"français"}>Français</SelectList>
                <SelectList value={"中国"}>中国</SelectList>
              </SelectLanguage>
            </LanguageBox>
            <JoinChatBtn
              onClick={props.onClickMoveToChat}
              disabled={props.access}
            >
              Join Chat Room
            </JoinChatBtn>
          </ChatAccessInfoBox>
        </ChatAccessBox>
      </Wrapper>
    </>
  );
}
