import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Context/Auth_Context.jsx";
import { Socket_provider } from "./Context/Socket_context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Socket_provider>
          <App />
        </Socket_provider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
