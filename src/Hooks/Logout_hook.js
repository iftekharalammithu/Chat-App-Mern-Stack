import React, { useContext } from "react";
import { Bounce, toast } from "react-toastify";
import { AuthContext } from "../Context/Auth_Context";
import use_conversation from "../Zustand/Use_Conversation";

const Logout_hook = () => {
  const { user, setUser } = useContext(AuthContext);
  const { select_Conversation, setSelect_Conversation } = use_conversation();

  const logout_fun = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/logout`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      if (data.Error) {
        throw new Error(data.Error);
      }
      localStorage.removeItem("chat_user");
      setSelect_Conversation(null);
      setUser(null);
    } catch (error) {
      console.log(error);
      toast.error("Logout Failed", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
  };
  return { logout_fun };
};

export default Logout_hook;
