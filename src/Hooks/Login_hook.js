import React, { useContext, useState } from "react";
import { Bounce, toast } from "react-toastify";
import { AuthContext } from "../Context/Auth_Context";

const Login_hook = () => {
  const [loading, setLoading] = useState(false);
  const { setUser } = useContext(AuthContext);

  const login_api = async ({ username, password }) => {
    const success = handle_signup({
      username,
      password,
    });

    if (!success) {
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(
        "https://mern-chat-backend-3af8.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );
      const data = await response.json();
      if (data.Error) {
        throw new Error(data.Error);
      }
      setUser(data);
      localStorage.setItem("chat_user", JSON.stringify(data));
    } catch (error) {
      toast.error(error.message, {
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
    } finally {
      setLoading(false);
    }
  };

  return { loading, login_api };
};

export default Login_hook;

const handle_signup = ({
  username,
  password,
}) => {
  if (!username || !password) {
    toast.error("Invalid Credential", {
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
      return false;
    
  }
};
