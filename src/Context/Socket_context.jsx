import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./Auth_Context";
import { io } from "socket.io-client";

const Socket_context = createContext();

const Socket_provider = ({ children }) => {
  const [socket, setsocket] = useState(null);
  const [online, setonline] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    if (user) {
      const socket = io(import.meta.env.VITE_API_URL, {
        query: {
          userid: user._id,
        },
      });
      socket.on("user_online", (online) => {
        setonline(online);
      });
      setsocket(socket);

      return () => {
        socket.close();
      };
    } else {
      if (socket) {
        socket.close();
        setsocket(null);
      }
    }
  }, [user]);
  return (
    <Socket_context.Provider value={{ socket, online }}>
      {children}
    </Socket_context.Provider>
  );
};

export { Socket_context, Socket_provider };
