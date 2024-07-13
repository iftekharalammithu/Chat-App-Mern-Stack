import React from "react";
import { BsSend } from "react-icons/bs";
import use_send_message from "../../Hooks/use_send_message";

const Send_Message = () => {
  const [message, set_message] = React.useState("");
  const { send_message } = use_send_message();

  const handle_submit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await send_message(message);
    set_message("");
  };
  return (
    <form onSubmit={handle_submit} className="px-4 my-3  ">
      <div className="w-full relative ">
        <input
          className=" border w-full text-sm text-white p-2 rounded bg-gray-600 outline-none border-gray-900"
          type="text"
          placeholder="Type a message"
          value={message}
          onChange={(e) => set_message(e.target.value)}
        />
        <button
          type="submit"
          className="flex absolute inset-y-0 end-0 items-center pe-3"
        >
          <BsSend />
        </button>
      </div>
    </form>
  );
};

export default Send_Message;
