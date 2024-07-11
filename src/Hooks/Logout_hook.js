import React, { useContext } from "react";
import { Bounce, toast } from "react-toastify";
import { AuthContext } from "../Context/Auth_Context";

const Logout_hook =  () => {
    
    const { user, setUser } =useContext(AuthContext);
    const logout_fun = async () => {

        try {
          const response = await fetch("https://mern-chat-backend-3af8.onrender.com/api/auth/logout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
      
        const data = await response.json()
        if (data.Error) {
          throw new Error(data.Error);
        } 
        localStorage.removeItem("chat_user");
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
    }
    return {logout_fun}
};


export default Logout_hook;
