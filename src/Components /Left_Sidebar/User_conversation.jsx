import React from "react";

const User_conversation = () => {
  return (
    <>
      <div className="custom-border flex gap-2 items-center hover:bg-sky-500 rounded px-2 py-1 cursor-pointer">
        <div className="avatar online">
          <div className="w-10 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="flex flex-col custom-border flex-1">
          <div className="flex justify-between ">
            <p className="font-bold text-gray-200">User Name</p>
            <p>❤</p>
          </div>
        </div>
      </div>
      <div className="divider h-0 my-0 py-0 px-2"></div>
    </>
  );
};

export default User_conversation;
