import React from "react";

const Login = () => {
  return (
    <div className=" flex flex-col  justify-center items-center min-w-96 mx-auto ">
      <div className="w-full p-6 rounded-lg shadow-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-400"> MERN CHAT</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text"> Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="input input-bordered h-10  w-full"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text"> Password </span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="input input-bordered h-10  w-full"
            />
          </div>
          <a
            href="#"
            className="inline-block mt-2 ml-1 hover:underline hover:text-blue-400 text-sm"
          >
            Don't have an account?
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2 ">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
