import { useContext, useState } from "react";
import { Bounce, toast } from "react-toastify";
import { AuthContext } from "../Context/Auth_Context";

const Signup_hook = () => {
  const [loading, setloading] = useState(false);
  const { user, setUser } = useContext(AuthContext);

  const Signup_data = async (formdata) => {
    const { fullname, username, password, confirmPassword, gender } = formdata;
    // console.log("data from hook:" , fullname);
    const success = handle_signup({
      fullname,
      username,
      password,
      confirmPassword,
      gender,
    });

    if (!success) {
      return;
    }
    setloading(true);
    try {
      const response = await fetch(
        "https://mern-chat-backend-3af8.onrender.com/api/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: fullname,
            username: username,
            password: password,
            confirmPassword: confirmPassword,
            gender: gender,
          }),
        }
      );

      const data = await response.json();
      // console.log(data);
      if (data.message === "user already exist") {
        toast.error("User Already Exist", {
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
        return;
      }
      // Set the localStorage
      localStorage.setItem("chat_user", JSON.stringify(data));
      setUser(data);
    } catch (error) {
      console.log(error);
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
      setloading(false);
    }
  };
  return { loading, Signup_data };
};

export default Signup_hook;

const handle_signup = ({
  fullname,
  username,
  password,
  confirmPassword,
  gender,
}) => {
  if (!fullname || !username || !password || !confirmPassword || !gender) {
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
  if (password !== confirmPassword) {
    toast.error("Password and Confirm Password do not match!", {
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
  if (password.length < 8) {
    toast.error("Password must be 8 characters!", {
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
  return true;
};
