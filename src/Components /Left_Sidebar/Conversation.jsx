import React from "react";
import User_conversation from "./User_conversation";
import use_conversation from "../../Zustand/Use_Conversation";
import Get_conversation_hook from "../../Hooks/Get_conversation_hook";

const Conversation = () => {
  // use_conversation();
  const { loading, conversations } = Get_conversation_hook();
  // console.log(conversations);

  return (
    <div className="py-2  flex flex-col  gap-3 overflow-auto">
      {conversations.users &&
        conversations.users.map((user, index) => (
          <User_conversation
            key={user._id}
            last_indx={index === conversations.users.length - 1}
            user={user}
          ></User_conversation>
        ))}
      <div className="flex items-center  justify-center">
        {loading ? (
          <span className="loading  loading-dots loading-lg"></span>
        ) : null}
      </div>
    </div>
  );
};

export default Conversation;
