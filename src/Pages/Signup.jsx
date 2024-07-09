import React, { useState } from "react";

const Signup = () => {
  const [selectedGender, setSelectedGender] = useState("Male"); // Default value

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };
  return (
    <div className=" flex flex-col  justify-center items-center min-w-96  mx-auto ">
      <div className="w-full p-6 custom-border rounded-lg shadow-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Signup <span className="text-blue-400">MERN CHAT</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text"> Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Fullname"
              className="input input-accent input-bordered h-10  w-full"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text"> Username</span>
            </label>
            <input
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
                type="radio"
                name="radio-2"
                value="Male"
                className="radio radio-primary"
                // defaultChecked
                checked={selectedGender === "Male"}
                onChange={handleGenderChange}
              />
            </div>
            <div className="align-center justify-center flex gap-3">
              <span>Female</span>
              <input
                type="radio"
                name="radio-2"
                value="Female"
                className="radio radio-primary"
                checked={selectedGender === "Female"}
                onChange={handleGenderChange}
              />
            </div>
          </div>
          <a
            href="#"
            className="inline-block mt-5 ml-1 hover:underline hover:text-blue-400 text-sm"
          >
            Already have an account?
          </a>
          <div>
            <button className="btn input-accent btn-block btn-sm mt-2 ">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
