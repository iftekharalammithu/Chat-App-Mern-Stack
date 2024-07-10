import React from "react";
import { BsSend } from "react-icons/bs";
const Send_Message = () => {
  return (
    <div className="">
      <form className="px-4 my-3 ">
        <div className="w-full relative ">
          <input
            className=" border w-full text-sm text-white p-2 rounded bg-gray-600 outline-none border-gray-900"
            type="text"
            placeholder="Type a message"
          />
          <button
            type="submit"
            className="flex absolute inset-y-0 end-0 items-center pe-3"
          >
            <BsSend />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Send_Message;
