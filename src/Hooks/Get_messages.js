import React, { useEffect, useState } from "react";
import use_conversation from "../Zustand/Use_Conversation";
import { Bounce, toast } from "react-toastify";

const Get_messages = () => {
    const [loading, setLoading] = useState(false);

  const { messages, setMessages, select_Conversation } = use_conversation();

  useEffect(() => {
    const get_message = async () => {
        setLoading(true)
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/messages/${
            select_Conversation._id
          }`,
          {
            method: "GET",
            credentials: "include",
          }
        );
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setMessages(data);
      } catch (error) {
        console.log(error.message);
        toast.error(error.message, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      } finally {
        setLoading(false);
      }
    };
    if (select_Conversation?._id) {
      get_message();
    }
  }, [select_Conversation?._id, setMessages]);
  return { messages , loading };
};

export default Get_messages;
