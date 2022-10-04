import React, { ReactNode, useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes as Switch,
  useNavigate,
} from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";

const Routes: React.FC = () => {
  const [logged, setLogged] = useState<boolean>(false);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    setLogged(false);
    return <Navigate to={"/"} />
  };

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route
            path="/home"
            element={logged ? <Home handleLogOut={handleLogOut} /> : <Navigate to={"/"} />}
          />
          <Route path="/" element={<Login setLogged={setLogged} />} />
          <Route
            path="*"
            element={<Navigate to={logged ? "/home" : "/"} replace />}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
