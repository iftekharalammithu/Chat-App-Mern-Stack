import React from "react";
import use_conversation from "../Zustand/Use_Conversation";

const use_send_message = () => {
  const { messages, setMessages, select_Conversation, setSelect_Conversation } =
    use_conversation();

  const send_message = async (message) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/messages/message/${
          select_Conversation._id
        }`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }),
        }
      );

      const data = await res.json();
      // console.log(data);
      if (data.error) {
        throw new Error(data.error);
      }

      setMessages((prev) => [...prev, data]);
    } catch (error) {
      console.log(error.message);
    }
  };
  return { send_message };
};

export default use_send_message;
