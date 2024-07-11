import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Error_page from "./Pages/Error_page";
import { useContext } from "react";
import { AuthContext } from "./Context/Auth_Context";

function App() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route
          path="/"
          element={user ? <Home></Home> : <Navigate to="/login" />}
        ></Route>
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Login></Login>}
        ></Route>
        <Route
          path="/signup"
          element={user ? <Navigate to="/" /> : <Signup></Signup>}
        ></Route>
        <Route path="*" element={<Error_page></Error_page>}></Route>
      </Routes>
    </div>
  );
}

export default App;
