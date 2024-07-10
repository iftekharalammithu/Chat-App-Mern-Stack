import React from "react";
import Messages from "./Messages";
import Send_Message from "./Send_Message";
import Start_Message from "./Start_Message";

const Message_bar = () => {
  const select_message = false;
  return (
    <div className=" md:min-w-[450px] w-[300px] flex flex-col">
      {select_message ? (
        <div>
          <div className="bg-gray-500  px-2 py-4">
            <span className="label-text">To:</span>
            <span className="text-gray-900 font-bold">Jhon Ali</span>
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
