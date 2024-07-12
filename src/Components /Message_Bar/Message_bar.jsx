import React from "react";
import Messages from "./Messages";
import Send_Message from "./Send_Message";
import Start_Message from "./Start_Message";
import use_conversation from "../../Zustand/Use_Conversation";

const Message_bar = () => {
  const { select_Conversation, setSelect_Conversation } = use_conversation();

  return (
    <div className=" md:min-w-[450px]  w-[300px] flex flex-col">
      {select_Conversation ? (
        <div className="h-full flex flex-col">
          <div className="bg-gray-500  items-center gap-2 flex px-2 py-4">
            <span className="label-text">To:</span>
            <span className="text-gray-900  font-bold">
              {select_Conversation.name}
            </span>
          </div>
          <Messages></Messages>
          <Send_Message></Send_Message>
        </div>
      ) : (
        <Start_Message></Start_Message>
      )}
    </div>
  );
};

export default Message_bar;
