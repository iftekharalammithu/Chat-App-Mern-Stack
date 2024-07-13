import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import use_conversation from "../../Zustand/Use_Conversation";
import Get_conversation_hook from "../../Hooks/Get_conversation_hook";
import { Bounce, toast } from "react-toastify";

const Search = () => {
  const [Search, setsearch] = useState("");
  const { setSelect_Conversation, select_Conversation } = use_conversation();
  const { conversations } = Get_conversation_hook();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!Search) {
      return;
    }
    const selected_conversation = conversations.users.find(
      (conversation) => conversation.name.toLowerCase() === Search.toLowerCase()
    );
    if (selected_conversation) {
      setSelect_Conversation(selected_conversation);
    } else {
      return toast.error("No User Found!", {
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
    }

    setsearch("");
  };
  return (
    <div className="">
      <form onSubmit={handleSearch} className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered rounded-full "
          value={Search}
          onChange={(e) => {
            setsearch(e.target.value);
          }}
        />
        <button className="btn btn-circle text-white bg-sky-500">
          <IoSearchSharp className="w-6 h-6 outline-none" />
        </button>
      </form>
    </div>
  );
};

export default Search;
