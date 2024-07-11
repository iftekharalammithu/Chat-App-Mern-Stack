import React from "react";
import { BiLogOut } from "react-icons/bi";
import Logout_hook from "../../Hooks/Logout_hook";
import { ToastContainer } from "react-toastify";
const Logout = () => {
  const { logout_fun } = Logout_hook();

  return (
    <div className="mt-auto ">
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
      <BiLogOut
        onClick={logout_fun}
        className="w-6 h-6 text-white cursor-pointer"
      />
    </div>
  );
};

export default Logout;
