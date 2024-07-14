import React, { useContext, useEffect } from "react";
import { Socket_context } from "../Context/Socket_context";
import use_conversation from "../Zustand/Use_Conversation";
import notification from "../sounds/notification.mp3";

const Listen_messages = () => {
  const { socket } = useContext(Socket_context);
  const { messages, setMessages } = use_conversation();

  useEffect(() => {
    if (socket) {
      socket.on("new_message", (message) => {
        const sound = new Audio(notification);
        sound.play();
        setMessages([...messages, message]);
      });
    }
    return () => {
      if (socket) {
        socket.off("new_message");
      }
    };
  }, [socket, messages, setMessages]);
};

export default Listen_messages;
