import React, { useContext } from "react";
import { TbMessages } from "react-icons/tb";
import { AuthContext } from "../../Context/Auth_Context";
const Start_Message = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex text-white items-center justify-center w-full h-full">
      <div className=" px-4 text-center sm:text-lg md:text-xl flex flex-col gap-3 items-center font-semibold">
        <p>Welcome 👋 {user.name} 💥</p>
        <p>Select a friend to start messaging</p>
        <TbMessages className="text-3xl sm:text-4xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

export default Start_Message;
