import React, { useEffect, useRef } from "react";
import Message from "./Message";
import Get_messages from "../../Hooks/Get_messages";
import Listen_messages from "../../Hooks/Listen_messages";

const Messages = () => {
  const { messages, loading } = Get_messages();
  // console.log("messages", messages);
  const last_maessage = useRef();
  Listen_messages();

  useEffect(() => {
    setTimeout(() => {
      last_maessage.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="px-4  flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={last_maessage}>
            <Message message={message} />
          </div>
        ))}
      {!loading && messages.length === 0 && (
        <p className=" text-center mt-4">
          Send Message to start the Conversation.
        </p>
      )}
    </div>
  );
};

export default Messages;
