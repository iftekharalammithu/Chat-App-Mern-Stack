import React, { useEffect, useState } from "react";

const Get_conversation_hook = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const get_conversation = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://mern-chat-backend-3af8.onrender.com/api/user/",
          {
            method: "POST",
            credentials: "include",
            // Ensure cookies are sent
          }
        );

        const data = await response.json();
        // console.log(data.users);
        if (data.error) {
          throw new Error(data.error);
        }
        setConversations(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    get_conversation();
  }, []);
  return { loading, conversations };
};

export default Get_conversation_hook;
