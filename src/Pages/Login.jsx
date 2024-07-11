import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login_hook from "../Hooks/Login_hook";
import { ToastContainer } from "react-toastify";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login_api } = Login_hook();

  const handleSubmit = (e) => {
    e.preventDefault();
    login_api({ username, password });
    // Perform login logic here
  };

  return (
    <div className=" flex flex-col  justify-center items-center min-w-96 mx-auto ">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition:Bounce
      />
      <div className="w-full p-6 rounded-lg shadow-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-400"> MERN CHAT</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text"> Username</span>
            </label>
            <input
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Enter Username"
              className="input input-accent input-bordered h-10  w-full"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text"> Password </span>
            </label>
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter Password"
              className="input input-accent input-bordered h-10  w-full"
            />
          </div>
          <Link
            to="/signup"
            className="inline-block mt-2 ml-1 hover:underline hover:text-blue-400 text-sm"
          >
            Don't have an account?
          </Link>
          <div>
            <button
              disabled={loading}
              className="btn input-accent btn-block btn-sm mt-2 "
            >
              {loading ? (
                <span className="loading loading-infinity loading-lg"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
