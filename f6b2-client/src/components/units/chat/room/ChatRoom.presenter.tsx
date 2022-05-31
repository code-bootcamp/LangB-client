import {
  ChatRoom,
  ChatRoomBox,
  Content,
  ExitBtn,
  Header,
  InputBox,
  InputBoxWrapper,
  MainBox,
  MemberName,
  MessageInput,
  MyContent,
  MyName,
  MyUserInfo,
  Name,
  NameWrapper,
  Sidebar,
  SubmitBtn,
  TalkBox,
  TalkMyBox,
  TalkWrapper,
  Title,
  UserInfo,
  UserName,
  Wrapper,
} from "./ChatRoom.styles";
import { RiArrowGoBackLine } from "react-icons/ri";
import { BiSend } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";

export default function ChatRoomUI(props: any) {
  let aa;
  if (props.backGround === "한국어") {
    aa =
      "https://cdn.discordapp.com/attachments/974505238029533295/980855928381390918/korean.png";
  }
  return (
    <>
      <Wrapper>
        <ChatRoomBox>
          <Header>
            <Title>{props.room}</Title>
          </Header>
          <MainBox>
            <Sidebar>
              <NameWrapper style={{ position: "relative" }}>
                <UserName>User List</UserName>
                {props.users !== "" && (
                  <>
                    {props.users.map((el: any) => (
                      <MemberName key={uuidv4()}>▻ {el.name}</MemberName>
                    ))}
                  </>
                )}
              </NameWrapper>
              <ExitBtn onClick={props.onClickExitChat}>
                <RiArrowGoBackLine style={{ marginRight: "10px" }} />
                Exit Chat Room
              </ExitBtn>
            </Sidebar>
            <ChatRoom>
              {props.messages !== "" && (
                <TalkWrapper ref={props.messageBoxRef}>
                  {props.messages.map((el: any) => (
                    <div key={uuidv4()}>
                      {el.user !== props.name ? (
                        <TalkBox>
                          <UserInfo>
                            <Name>{el.user}</Name>
                          </UserInfo>
                          <Content>{el.text}</Content>
                        </TalkBox>
                      ) : (
                        <TalkMyBox>
                          <MyUserInfo>
                            <MyName>{el.user}</MyName>
                          </MyUserInfo>
                          <MyContent>{el.text}</MyContent>
                        </TalkMyBox>
                      )}
                    </div>
                  ))}
                </TalkWrapper>
              )}
              <InputBoxWrapper>
                <InputBox>
                  <MessageInput
                    placeholder="Enter your text here"
                    onChange={props.onChangeMessage}
                    onKeyPress={props.onKeyPressSubmit}
                    onClick={props.onClickSendMessage}
                    value={props.message}
                  />
                  <SubmitBtn
                    onClick={props.onClickSendMessage}
                    disabled={props.sendValid}
                  >
                    <BiSend />
                  </SubmitBtn>
                </InputBox>
              </InputBoxWrapper>
            </ChatRoom>
          </MainBox>
        </ChatRoomBox>
      </Wrapper>
    </>
  );
}
