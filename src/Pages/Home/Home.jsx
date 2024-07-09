import React from "react";
import Left_Sidebar from "../../Components /Left_Sidebar/Left_Sidebar";
import Message_bar from "../../Components /Message_Bar/Message_bar";

const Home = () => {
  return (
    <div className="flex h-[650px] sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Left_Sidebar></Left_Sidebar>
      <Message_bar></Message_bar>
    </div>
  );
};

export default Home;
