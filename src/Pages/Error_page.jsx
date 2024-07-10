import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Error_page = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, []);

  return (
    <div className=" flex flex-col  justify-center items-center min-w-96 mx-auto ">
      <div className="w-full flex flex-col items-center justify-center  p-6 rounded-lg shadow-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="font-bold text-3xl text-gray-300">
          404 Page Not Found!
        </h1>
        <span>Redirect To Home Page...</span>
      </div>
    </div>
  );
};

export default Error_page;
