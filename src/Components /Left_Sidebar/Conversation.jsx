import React from "react";
import User_conversation from "./User_conversation";

const Conversation = () => {
  return (
    <div className="py-2  flex flex-col gap-3 overflow-auto">
      <User_conversation></User_conversation>
      <User_conversation></User_conversation>
      <User_conversation></User_conversation>
      <User_conversation></User_conversation>
      <User_conversation></User_conversation>
      <User_conversation></User_conversation>
      <User_conversation></User_conversation>
    </div>
  );
};

export default Conversation;
