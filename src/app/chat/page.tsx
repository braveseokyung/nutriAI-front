'use client';

import { useState, useEffect, useRef } from 'react';
import backgroundChat from "@/images/backgroundChat.svg";

import ChatButton from "@/components/ChatButton";
import Header from "@/components/Header";
import UserChat from "@/components/UserChat";
import BotChat from "@/components/BotChat";

export default function Home() {
  const [messages, setMessages] = useState<
    { sender: 'user' | 'bot'; text: string }[]
  >([]);
  const [isBotResponding, setIsBotResponding] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = (message: string) => {
    if (message.trim() !== '') {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'user', text: message },
      ]);
      setIsBotResponding(true);

      // Simulate bot response after a delay
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'bot', text: 'Bot response to: ' + message },
        ]);
        setIsBotResponding(false);
      }, 1000);
    }
  };
  
  useEffect(() => {
    // 세션 스토리지에서 inputValue를 불러옴
    const storedValue = sessionStorage.getItem('chat');
    if (storedValue) {
      // 세션 스토리지에서 데이터를 불러온 후, 메시지 전송 함수 호출
      handleSendMessage(storedValue);
      // 세션 스토리지에서 데이터 삭제
      sessionStorage.removeItem('chat');
    }

    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundChat.src})`,
        backgroundAttachment: 'fixed',
      }}
    > 
      {/* Header */}
      <div className="fixed top-0 left-0 w-full z-10">
        <Header />
      </div>
      
      {/* Chat Container */}
      <div
        ref={chatContainerRef}
        className="absolute top-[80px] bottom-[140px] left-0 right-0 flex justify-center overflow-y-scroll overflow-x-hidden p-2 pb-12"
      >
        <div className="w-[764px] flex flex-col gap-6">
          {/* Render each message */}
          {messages.map((message, index) => (
            <div key={index} className={message.sender === 'user' ? 'self-end' : 'self-start'}>
              {message.sender === 'user' ? <UserChat message={message.text} /> : <BotChat message={message.text} />}
            </div>
          ))}
        </div>
      </div>

      {/* Input Field */}
      <div className="fixed bottom-0 left-0 w-full pb-8 flex justify-center items-center z-10">
        <div className="flex flex-col w-[764px] h-[60px]">
          <ChatButton onSendMessage={handleSendMessage} disabled={isBotResponding} />
        </div>
      </div>
    </div>
  );
}
