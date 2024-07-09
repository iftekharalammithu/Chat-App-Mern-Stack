import React from "react";
import Search from "./Search";
import Conversation from "./Conversation";
import Logout from "./Logout";

const Left_Sidebar = () => {
  return (
    <div className="border-r border-gray-500 py-2 flex flex-col ">
      <Search></Search>
      <div className="divider px-3"></div>
      <Conversation></Conversation>
      <Logout></Logout>
    </div>
  );
};

export default Left_Sidebar;
