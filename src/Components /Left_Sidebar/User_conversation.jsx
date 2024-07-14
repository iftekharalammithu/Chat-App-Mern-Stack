import React, { useContext } from "react";
import use_conversation from "../../Zustand/Use_Conversation";
import { Socket_context } from "../../Context/Socket_context";

const User_conversation = ({ user, last_indx }) => {
  const { select_Conversation, setSelect_Conversation } = use_conversation();
  const is_select = select_Conversation?._id === user._id;

  const { online } = useContext(Socket_context);
  const isonline = online.includes(user._id);

  return (
    <>
      <div
        onClick={() => setSelect_Conversation(user)}
        className={
          ` flex gap-2 items-center  hover:bg-sky-500 rounded px-2 py-1 cursor-pointer` +
          (is_select ? " bg-sky-500" : "")
        }
      >
        <div className={`avatar ${isonline ? "online" : ""}`}>
          <div className="w-10 rounded-full">
            <img src={user.profilePic} />
          </div>
        </div>
        <div className="flex flex-col  flex-1">
          <div className="flex justify-between ">
            <p className="font-bold text-gray-200">{user.name}</p>
          </div>
        </div>
      </div>
      {!last_indx && <div className="divider h-0 my-0 py-0 px-2"></div>}
    </>
  );
};

export default User_conversation;
