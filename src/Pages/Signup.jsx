import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signup_hook from "../Hooks/Signup_hook";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, Signup_data } = Signup_hook();

  const handle_Submit = async (e) => {
    e.preventDefault();
    await Signup_data(formData);
  };

  // Get the Gender
  const handleCheckboxChange = (event) => {
    // console.log("Gender selectedd:", event.target.value);
    setFormData({ ...formData, gender: event.target.value });
  };

  return (
    <div className=" flex flex-col  justify-center items-center min-w-96  mx-auto ">
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
      <div className="w-full p-6  rounded-lg shadow-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl  mb-4 font-semibold text-center text-gray-300">
          Signup <span className="text-blue-400">MERN CHAT</span>
        </h1>

        <form onSubmit={handle_Submit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text"> Full Name</span>
            </label>
            <input
              name="fullname"
              value={formData.fullname}
              onChange={(e) =>
                setFormData({ ...formData, fullname: e.target.value })
              }
              type="text"
              required
              placeholder="Enter Fullname"
              className="input input-accent input-bordered h-10  w-full"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text"> Username</span>
            </label>
            <input
              name="username"
              required
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
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
              name="password"
              required
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              value={formData.password}
              type="password"
              placeholder="Enter Password"
              className="input input-accent input-bordered h-10  w-full"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password </span>
            </label>
            <input
              name="confirmPassword"
              required
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              type="password"
              placeholder="Confirm Password"
              className="input input-accent input-bordered h-10  w-full"
            />
          </div>
          {/* here will be gender chackbox */}
          <div className=" flex  mt-2 gap-3 ">
            <div className="align-center justify-center flex gap-3">
              <span className=" justify-center">Male</span>
              <input
                required
                type="radio"
                name="radio-2"
                value="male"
                className="radio radio-primary"
                // defaultChecked
                checked={formData.gender === "male"}
                onChange={handleCheckboxChange}
              />
            </div>
            <div className="align-center justify-center flex gap-3">
              <span>Female</span>
              <input
                required
                type="radio"
                name="radio-2"
                value="female"
                className="radio radio-primary"
                checked={formData.gender === "female"}
                onChange={handleCheckboxChange}
              />
            </div>
          </div>
          <Link
            to="/login"
            className="inline-block mt-5 ml-1 hover:underline hover:text-blue-400 text-sm"
          >
            Already have an account?
          </Link>
          <div>
            <button
              disabled={loading}
              className="btn input-accent btn-block btn-sm mt-2  "
            >
              {loading ? (
                <span className="loading btn-sm loading-infinity loading-lg"></span>
              ) : (
                "Signup"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
