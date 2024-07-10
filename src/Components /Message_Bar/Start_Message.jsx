import React from "react";
import { TbMessages } from "react-icons/tb";
const Start_Message = () => {
  return (
    <div className="flex text-white items-center justify-center w-full h-full">
      <div className=" px-4 text-center sm:text-lg md:text-xl flex flex-col gap-3 items-center font-semibold">
        <p>Welcome 👋 Jhon Ali 💥</p>
        <p>Select a friend to start messaging</p>
        <TbMessages className="text-3xl sm:text-4xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

export default Start_Message;
