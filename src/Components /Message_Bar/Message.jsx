import React, { useContext } from "react";
import { AuthContext } from "../../Context/Auth_Context";
import use_conversation from "../../Zustand/Use_Conversation";
import { extractTime } from "../../../utils/extract_time";

const Message = ({ message }) => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const { select_Conversation } = use_conversation();
  const from_me = user?._id === message.senderId;
  const chat_class = from_me ? "chat chat-end" : "chat chat-start";
  const profil_pic = from_me
    ? user.profilePic
    : select_Conversation?.profilePic;

  const bubblebgcolor = from_me ? "bg-blue-500" : "bg-gray-700";
  const formated_time = extractTime(message.createdAt);
  // console.log("select", select_Conversation);
  // console.log(from_me);
  // console.log("user", user);
  // console.log("message id", message._id);

  return (
    <div>
      <div className={`chat  ${chat_class}`}>
        <div className="chat-image  avatar">
          <div className="w-10  rounded-full">
            <img alt="Tailwind CSS chat bubble component" src={profil_pic} />
          </div>
        </div>

        <div className={`chat-bubble text-white ${bubblebgcolor}`}>
          {message.message}
        </div>
        <div className="chat-footer opacity-50">{formated_time}</div>
      </div>
    </div>
  );
};

export default Message;
