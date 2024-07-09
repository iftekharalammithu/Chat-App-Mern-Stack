import React from "react";
import Search from "./Search";
import Conversation from "./Conversation";
import Logout from "./Logout";

const Left_Sidebar = () => {
  return (
    <div>
      <Search></Search>
      <div className="divider px-3"></div>
      <Conversation></Conversation>
      <Logout></Logout>
    </div>
  );
};

export default Left_Sidebar;
