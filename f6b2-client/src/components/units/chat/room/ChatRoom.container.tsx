import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import ChatRoomUI from './ChatRoom.presenter';
//  @ts-ignore
import io from 'socket.io-client';

let socket: any;

export default function ChatRoom() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [backGround, setBackground] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = '34.64.147.240:3001';
  const [sendValid, setSendValid] = useState(true);
  const messageBoxRef = useRef();

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (message !== '') {
      setSendValid(false);
    }
  }, [message]);

  useEffect(() => {
    socket = io(ENDPOINT);
    setName(String(router.query.chatInfo)?.split('-')[0]);
    setBackground(String(router.query.chatInfo)?.split('-')[1]);
    setRoom(String(router.query.chatInfo)?.split('-')[1]);

    socket.emit('join', { name, room }, (error: any) => {
      if (error) {
      }
    });
  });

  useEffect(() => {
    socket.on('message', (message: any) => {
      //  @ts-ignore
      setMessages((msgs) => [...msgs, message]);
    });
    //  @ts-ignore
    socket.on('roomData', ({ users }) => {
      setUsers(users);
    });
  });

  const onChangeMessage = (event: any) => {
    setMessage(event.target.value);
  };

  const onClickSendMessage = () => {
    if (message) {
      socket.emit('sendMessage', message, name, room);
      setMessage('');
      setSendValid(true);
    }
  };

  const onClickExitChat = () => {
    document.location.href = '/chat';
  };

  const onKeyPressSubmit = (event: any) => {
    if (event.key == 'Enter') onClickSendMessage();
  };

  const scrollToBottom = () => {
    if (messageBoxRef.current) {
      //  @ts-ignore
      messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
    }
  };

  return (
    <ChatRoomUI
      name={name}
      room={room}
      onChangeMessage={onChangeMessage}
      onClickSendMessage={onClickSendMessage}
      messages={messages}
      users={users}
      onClickExitChat={onClickExitChat}
      onKeyPressSubmit={onKeyPressSubmit}
      message={message}
      sendValid={sendValid}
      messageBoxRef={messageBoxRef}
      backGround={backGround}
    />
  );
}
